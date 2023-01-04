
import { User} from '../utils/types.js';
import {response} from '../utils/response.js';
import { getAllUsers } from './getAllUsers.js';

let UsersBase = getAllUsers().data;

export const deleteUser = (id: string) => {
    
    
    const user:User = UsersBase.find((user) => user.id === id);
    //const userToDelete = { ...user } as Partial<User>

    if (!user) {
        response.status = 404;
        return {response, data: UsersBase, message: `User with id ${id} not found`};
    }
    if (user) {
        response.status = 204;
        UsersBase = UsersBase.filter((user) => user.id !== id);
        //delete user;
       
        return{...response, data: UsersBase, message: `User with id ${id} deleted`}
       
    }
}
