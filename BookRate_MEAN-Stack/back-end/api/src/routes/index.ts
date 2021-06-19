import {Router} from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { createPhoto, getPhoto, getPhotosFromGenre, getBookFromTitle, getPhotos, deletePhoto, updatePhoto, getBookAdmin } from '../controllers/photo.controller';
import multer from '../libs/multer';
import Photo from '../models/Photo';


const router = Router();

router.route('/photos')
    // Get all photos
    .get(verifyToken ,getPhotos)
    // Create photo
    .post(multer.single('image') ,createPhoto);
    
    
router.route('/genre/:genre')
    // Return photos from specify genre    
    .get(verifyToken ,getPhotosFromGenre)

router.route('/title/:title')
    // Get book from specific title
    .get(getBookFromTitle)

router.route('/photos/:id')
    // Return - Delete - Update one photo from specific id
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto)

router.route('/book/:id')
    // Get book preview for admin users
    .get(getBookAdmin)

// Vote specific book with a binary vote variable and the book id
router.post('/photos/vote', async (req, res) => {
    console.log("something")
    const { vote, id } = req.body;
    if( vote == "upvote"){

        const upvotedBook = await Photo.findByIdAndUpdate(id, {
            $inc: {voteCount: 1}
        });
    
        return res.json({
            message: 'Successfully Upvoted',
            upvotedBook
        });

    } else if( vote == "downvote" ){
        const downvotedBook = await Photo.findByIdAndUpdate(id, {
            $inc: {voteCount: -1}
        });
    
        return res.json({
            message: 'Successfully Downvoted',
            downvotedBook
        });
    } else {
        return res.status(401).send("Unsuccessfull vote")
    }
});
    
// Add a comment to the database
router.post('/photos/:id', async (req, res) => {
    
    const { id } = req.params;
    const { comment } = req.body;
    
    const updatedPhoto = await Photo.findByIdAndUpdate(id, {

         $push: { comments: comment } 
    }, {new: true});
    return res.json({
        message: 'Successfully Updated',
        updatedPhoto
    });
})

// Register a new user
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User(req.body)
    await newUser.save();
    const token = jwt.sign({_id: newUser._id}, 'secretkey')
    res.json({token});
    console.log(email, password)
});

// Login in BookRate with existant account
router.post('/signin', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(401).send("The email doesn't exist");
    if(user.password !== password) return res.status(401).send("Wrong password")

    const token = jwt.sign({_id: user._id}, 'secretkey')
    return res.status(200).json({token});
})

// Login with and existant admin account (The admin signup process is made directly on the db)
router.post('/admin-signin', async (req, res) => {
    const {adminId, password } = req.body;
    const adminUser = await User.findOne({adminId});
    if(!adminUser) return res.status(401).send("The email doesn't exist");
    if(adminUser.password !== password) return res.status(401).send("Wrong password")

    const token = jwt.sign({_id: adminUser._id}, 'secretkey')
    return res.status(200).json({token});
})

// set token for some element access
function verifyToken(req: any, res: any, next: any){

    if(!req.headers.authorization){
        return res.status(401).send('Authorization denied');
    }
    
    const token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('Undefinded token')
    }
    
    const payload = jwt.verify(token, 'secretkey')
    
    // req.userId = payload._id;
    next();
    
    next;
}

module.exports = router;
export default router;
