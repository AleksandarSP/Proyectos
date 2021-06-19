// admin user model for database
import {Schema, model, Document} from 'mongoose'

const schema = new Schema({
    adminId: String,
    password: String
});

interface IAdminUser extends Document {
    adminId: string,
    password: string
}

export default model<IAdminUser>('AdminUser', schema);