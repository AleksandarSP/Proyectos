// user model in database
import {Schema, model, Document} from 'mongoose'

const schema = new Schema({
    email: String,
    password: String
});

interface IUser extends Document {
    email: string,
    password: string
}

export default model<IUser>('User', schema);

// export const User = model('User', schema);