
import { User} from '../utils/types.js';
import {response} from '../utils/response.js';
import { getAllUsers } from './getAllUsers.js';
//let UsersBase: User[] = [];
//import { UsersBase } from '../utils/usersBase.js';
export const deleteUser = (id: string) => {
    
    let UsersBase = getAllUsers().data;
    const user = UsersBase.find((user) => user.id === id);
    
    if (!user) {
        response.status = 404;
        response.message = `User with id ${id} not found`;
        return response;
    }
    if (user) {
        response.status = 204;
        UsersBase = UsersBase.filter((user) => user.id !== id);
        return{...response, data: UsersBase, message: `User with id ${id} deleted`}
       
    }
}
