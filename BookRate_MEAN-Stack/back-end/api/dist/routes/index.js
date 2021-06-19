"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const photo_controller_1 = require("../controllers/photo.controller");
const multer_1 = __importDefault(require("../libs/multer"));
const Photo_1 = __importDefault(require("../models/Photo"));
const router = express_1.Router();
router.route('/photos')
    // Get all photos
    .get(verifyToken, photo_controller_1.getPhotos)
    // Create photo
    .post(multer_1.default.single('image'), photo_controller_1.createPhoto);
router.route('/genre/:genre')
    // Return photos from specify genre    
    .get(verifyToken, photo_controller_1.getPhotosFromGenre);
router.route('/title/:title')
    // Get book from specific title
    .get(photo_controller_1.getBookFromTitle);
router.route('/photos/:id')
    // Return - Delete - Update one photo from specific id
    .get(photo_controller_1.getPhoto)
    .delete(photo_controller_1.deletePhoto)
    .put(photo_controller_1.updatePhoto);
router.route('/book/:id')
    // Get book preview for admin users
    .get(photo_controller_1.getBookAdmin);
// Vote specific book with a binary vote variable and the book id
router.post('/photos/vote', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("something");
    const { vote, id } = req.body;
    if (vote == "upvote") {
        const upvotedBook = yield Photo_1.default.findByIdAndUpdate(id, {
            $inc: { voteCount: 1 }
        });
        return res.json({
            message: 'Successfully Upvoted',
            upvotedBook
        });
    }
    else if (vote == "downvote") {
        const downvotedBook = yield Photo_1.default.findByIdAndUpdate(id, {
            $inc: { voteCount: -1 }
        });
        return res.json({
            message: 'Successfully Downvoted',
            downvotedBook
        });
    }
    else {
        return res.status(401).send("Unsuccessfull vote");
    }
}));
// Add a comment to the database
router.post('/photos/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { comment } = req.body;
    const updatedPhoto = yield Photo_1.default.findByIdAndUpdate(id, {
        $push: { comments: comment }
    }, { new: true });
    return res.json({
        message: 'Successfully Updated',
        updatedPhoto
    });
}));
// Register a new user
router.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const newUser = new User_1.default(req.body);
    yield newUser.save();
    const token = jsonwebtoken_1.default.sign({ _id: newUser._id }, 'secretkey');
    res.json({ token });
    console.log(email, password);
}));
// Login in BookRate with existant account
router.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield User_1.default.findOne({ email });
    if (!user)
        return res.status(401).send("The email doesn't exist");
    if (user.password !== password)
        return res.status(401).send("Wrong password");
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, 'secretkey');
    return res.status(200).json({ token });
}));
// Login with and existant admin account (The admin signup process is made directly on the db)
router.post('/admin-signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { adminId, password } = req.body;
    const adminUser = yield User_1.default.findOne({ adminId });
    if (!adminUser)
        return res.status(401).send("The email doesn't exist");
    if (adminUser.password !== password)
        return res.status(401).send("Wrong password");
    const token = jsonwebtoken_1.default.sign({ _id: adminUser._id }, 'secretkey');
    return res.status(200).json({ token });
}));
// set token for some element access
function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Authorization denied');
    }
    const token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
        return res.status(401).send('Undefinded token');
    }
    const payload = jsonwebtoken_1.default.verify(token, 'secretkey');
    // req.userId = payload._id;
    next();
    next;
}
module.exports = router;
exports.default = router;
