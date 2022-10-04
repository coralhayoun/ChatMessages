import express from 'express';
import { userService } from '../services/userService';

export const userRouter = express.Router();

userRouter.get('/', getAllUsers);

async function getAllUsers(request: any, response: any) {
    const users = await userService.getUsers();
    response.send(users);
}

