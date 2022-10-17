import { userProvider } from "../dal/userProvider";
import { IUser } from "../models/User";

export const userService = (function userService() {
    return {
        getUsers,

    };

    async function getUsers(filter = {}): Promise<IUser[]> {
        return await userProvider.getUsers(filter);
    }
}());