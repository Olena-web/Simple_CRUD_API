import { UsersBase } from '../utils/usersBase.js';
import {response} from '../utils/response.js';


export const getUser = (id: string) => {
    response.status = 200;
    if (id) {
    response.data = UsersBase.find(user => user.id === id);
    if (response.data) {
        return {...response, data: response.data, message: `User with id ${id} found`};
    }
    else {
    response.data = null;
    response.status = 404;
    return {...response, data: response.data, message: `User with id ${id} not found`};
}
    }
}