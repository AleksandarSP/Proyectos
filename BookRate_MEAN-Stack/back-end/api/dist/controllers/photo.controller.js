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
exports.updatePhoto = exports.deletePhoto = exports.createPhoto = exports.getBookAdmin = exports.getPhoto = exports.getPhotosFromGenre = exports.getBookFromTitle = exports.getPhotos = void 0;
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const Photo_1 = __importDefault(require("../models/Photo"));
// get all books
function getPhotos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const photos = yield Photo_1.default.find();
        return res.json(photos);
    });
}
exports.getPhotos = getPhotos;
// get the book with the received title
function getBookFromTitle(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const photos = yield Photo_1.default.findOne({ title: req.params.title });
        return res.json(photos);
    });
}
exports.getBookFromTitle = getBookFromTitle;
// get the book with the received genre
function getPhotosFromGenre(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const photos = yield Photo_1.default.find({ genre: req.params.genre });
        return res.json(photos);
    });
}
exports.getPhotosFromGenre = getPhotosFromGenre;
// get the book with the received id
function getPhoto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const photo = yield Photo_1.default.findById(req.params.id);
        return res.json(photo);
    });
}
exports.getPhoto = getPhoto;
//get the book for admin users with specific id
function getBookAdmin(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const photo = yield Photo_1.default.findById(req.params.id);
        return res.json(photo);
    });
}
exports.getBookAdmin = getBookAdmin;
// create book with the received parameters
function createPhoto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title, description, genre } = req.body;
        const newPhoto = {
            title,
            description,
            genre,
            imagePath: req.file.path,
            voteCount: 0,
            coments: null
        };
        const photo = new Photo_1.default(newPhoto);
        yield photo.save();
        return res.json({
            message: 'Photo succesfully saved',
            photo
        });
    });
}
exports.createPhoto = createPhoto;
// delete book with a specific id
function deletePhoto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const photo = yield Photo_1.default.findById(req.params.id);
        if (photo) {
            fs_extra_1.default.unlink(path_1.default.resolve(photo.imagePath));
        }
        yield Photo_1.default.remove(photo);
        return res.json({
            message: 'Photo Deleted',
            photo: {
                photo
            }
        });
    });
}
exports.deletePhoto = deletePhoto;
// update book with a specific id 
function updatePhoto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { title, description, genre } = req.body;
        const updatedPhoto = yield Photo_1.default.findByIdAndUpdate(id, {
            title,
            description,
            genre,
        }, { new: true });
        return res.json({
            message: 'Successfully Updated',
            updatedPhoto
        });
    });
}
exports.updatePhoto = updatePhoto;
