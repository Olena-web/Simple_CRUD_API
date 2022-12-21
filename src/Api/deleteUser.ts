
import { User} from '../utils/types.js';
import {response} from '../utils/response.js';
let UsersBase: User[] = [];

export const deleteUser = (id: string) => {
    const user = UsersBase.find(user => user.id === id);
    console.log(user);
    if (user) {
        UsersBase = UsersBase.splice(user.index, 1);
        response.status = 204;
        response.message = "User with id `${id}` deleted";
        return { ...response, data: user };
    }
    return { status: 404, message: "Not Found" };
}
