import { response } from "../utils/response.js";
import { User } from "../utils/types.js";
import { UsersBase } from "../utils/usersBase.js";


export const updateUser = (id: string) => {
    const user: User = UsersBase.find(user => user.id === id);
    if (user) {
       UsersBase[user.index] = {...UsersBase[user.index], ...user};
    
    response.status = 201;
    response.data = UsersBase[user.index];
    return {...response, data: user, message: "Updated"};   
    }
    response.status = 400;
    response.message = "Bad Request";
    return response;
    
  }