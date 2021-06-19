// Book model in database
import {Schema, model, Document} from 'mongoose'

const schema = new Schema({
    title: String,
    description: String,
    genre: String,
    imagePath: String,
    voteCount: Number,
    comments: [
        {user: String, comment: String}
    ]
});


interface IPhoto extends Document {
    title: string;
    description: string;
    genre: string;
    imagePath: string;
    voteCount: number;
    comments: [
        {user: string, comment: string}
    ];
}

export default model<IPhoto>('Photo', schema);