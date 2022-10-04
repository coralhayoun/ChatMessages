import mongoose, {Connection} from 'mongoose';
import {dbConfig} from '../config/dbConfig';
import { User } from '../models/User';

export async function initializeDb() {
    await connect();
}

async function connect(): Promise<Connection> {
    await mongoose.connect(dbConfig.conncetion.connectionString, { autoIndex: false }); 
    return mongoose.connection;
}

export function disconnect() {
    mongoose.connection.close();
}