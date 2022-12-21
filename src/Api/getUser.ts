import { UsersBase } from '../utils/usersBase.js';
import {response} from '../utils/response.js';


export const getUser = (id: string) => {
    response.status = 200;
    if (id) {
    response.data = UsersBase.find(user => user.id === id);
    if (response.data) {
        return {...response, message: `User with id ${id} found`};
    }
    response.data = null;
    response.status = 404;
    response.message = `User with id ${id} not found`;
    return {...response};
}
}