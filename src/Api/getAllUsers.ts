import { UsersBase } from '../utils/usersBase.js';
import { response } from '../utils/response.js';

export const getAllUsers = () => {
    response.status = 200;
    return { ...response, data: UsersBase };
} 
