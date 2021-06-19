import {Request, Response} from 'express';
import path from 'path'
import fs from 'fs-extra'
import Photo from '../models/Photo'

    // get all books
export async function getPhotos(req: Request, res: Response): Promise<Response>{
    const photos = await Photo.find();
    return res.json(photos);
}

    // get the book with the received title
export async function getBookFromTitle(req: Request, res: Response): Promise<Response>{
    const photos = await Photo.findOne({title: req.params.title});
    return res.json(photos);
}
    
    // get the book with the received genre
export async function getPhotosFromGenre(req: Request, res: Response): Promise<Response>{
    const photos = await Photo.find({genre: req.params.genre});
    return res.json(photos);
}

    // get the book with the received id
export async function getPhoto(req: Request, res: Response): Promise<Response>{
    const photo = await Photo.findById(req.params.id)
    return res.json(photo);
}

    //get the book for admin users with specific id
export async function getBookAdmin(req: Request, res: Response): Promise<Response>{
    const photo = await Photo.findById(req.params.id)
    return res.json(photo);
}

    // create book with the received parameters
export async function createPhoto(req: Request, res: Response){

    const { title, description, genre } = req.body

    const newPhoto = {
        title,
        description,
        genre,
        imagePath: req.file.path,
        voteCount: 0,
        coments: null
    }

    const photo = new Photo(newPhoto);
    await photo.save();

    return res.json({
        message: 'Photo succesfully saved',
        photo
    })
}

    // delete book with a specific id
export async function deletePhoto(req: Request, res: Response): Promise<Response>{
    const photo = await Photo.findById(req.params.id)
    if (photo) {
        fs.unlink(path.resolve(photo.imagePath))
    }
    await Photo.remove(photo);

    return res.json({
        message: 'Photo Deleted',
        photo: {
            photo
        }
    });
}

    // update book with a specific id 
export async function updatePhoto(req: Request, res: Response): Promise<Response>{
    const { id } = req.params;
    const { title, description, genre } = req.body;
    
    const updatedPhoto = await Photo.findByIdAndUpdate(id, {
        title,
        description,
        genre,
    }, {new: true});
    return res.json({
        message: 'Successfully Updated',
        updatedPhoto
    });
}



