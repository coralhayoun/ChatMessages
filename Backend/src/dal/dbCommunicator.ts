import mongoose from 'mongoose';
import {dbConfig} from '../config/dbConfig';

export async function query(callback: Function) {
    await connect();
    callback();
    disconnect();
}

async function connect() {
    await mongoose.connect(dbConfig.conncetion.connectionString); 
}

function disconnect() {
    mongoose.connection.close();
}