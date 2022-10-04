import {v4 as uuid} from 'uuid';
import mongoose, { Schema, Document } from 'mongoose';

const userSchema = new Schema({
    name: String,
    status: String,
    image: String
});

export interface IUser extends Document {
    name: string;
    status: string;
    image: string;
};

export const User = mongoose.model<IUser>('User', userSchema);