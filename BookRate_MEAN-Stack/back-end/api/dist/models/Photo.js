"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Book model in database
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: String,
    description: String,
    genre: String,
    imagePath: String,
    voteCount: Number,
    comments: [
        { user: String, comment: String }
    ]
});
exports.default = mongoose_1.model('Photo', schema);
