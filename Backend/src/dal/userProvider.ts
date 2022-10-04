import { User, IUser } from "../models/User";

export const userProvider = (function userProvider() {
    
    return {
        getUsers,
        insertUsers,
    };

    async function getUsers(filter: any = {}) :Promise<IUser[]> {
        return await User.find(filter);
    }

    async function insertUsers(users: IUser[]) {
        const newUser = new User({name: 'ilayb', status: 'yolo', image: 'b'});
        await newUser.save();
    }
})();