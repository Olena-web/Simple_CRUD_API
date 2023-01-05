
import { User} from '../utils/types.js';
import {response} from '../utils/response.js';
import { getAllUsers } from './getAllUsers.js';


export const deleteUser = (id: string) => {
    let UsersBase = getAllUsers().data;
    if(!id) {
        response.status = 400;
        return {response, data: UsersBase, message: `Bad request`};
    }

    let userToDelete: User = UsersBase.find(user => user.id === id);
    const userIndex = UsersBase.findIndex(user => user.id === id); 
   
    if (!userToDelete) {
        response.status = 404;
        return {response, data: UsersBase, message: `User with id ${id} not found`};
    }
    if (userToDelete) {
        response.status = 204;
        UsersBase = UsersBase.splice(userIndex, 1);
        return{...response, data: UsersBase, message: `User with id ${id} deleted`}
   }
}
