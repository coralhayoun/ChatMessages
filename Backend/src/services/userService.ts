import { userProvider } from "../dal/userProvider";

export const userService = (function userService() {
    return {
        getUsers,
        
    };

    async function getUsers(filter = {}) {
        return await userProvider.getUsers(filter);
    }
}());