import { userId } from '../utils/userId.js';
import { User} from '../utils/types.js';
import { UsersBase } from '../utils/usersBase.js';
import {response} from '../utils/response.js';


export const createUser = (user: User) => {
    const newUser = { id: userId, ...user };
    if (newUser !== null) {
    UsersBase.push(newUser);
    response.status = 201;
    response.data = newUser;
    return {...response, data: newUser, message: "Created"};   
    }
    response.status = 400;
    response.message = "Bad Request";
    return response;
    
  }