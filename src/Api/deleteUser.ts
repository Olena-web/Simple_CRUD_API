
import { User} from '../utils/types.js';
import {response} from '../utils/response.js';
let UsersBase: User[] = [];

export const deleteUser = (id: string) => {
    response.status = 200;
    if (id) {
    const user = UsersBase.findIndex(user => user.id === id);
   
    if (user) {
        UsersBase = UsersBase.splice(user, 1);
        response.status = 204;
        response.message = `User with id ${id} deleted`;
        return { ...response, data: user };
    }
    return { status: 404, message: "Not Found" };
}
}
