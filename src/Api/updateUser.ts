import { response } from "../utils/response.js";
import { User } from "../utils/types.js";
import { UsersBase } from "../utils/usersBase.js";


export const updateUser = (id: string, user: User) => {
   //  let user: User = UsersBase.find(user => user.id === id);
   //  if (user) {
   //    user = {'id': id, ...user}
   //    console.log(Object.entries(user).forEach(([key, value]) => {
   //       console.log(`${key} ${value}`);
   //    }));

   //    // UsersBase[user.index] = {...UsersBase[user.index], ...user};
    
   //  //response.status = 201;
   //  //response.data = UsersBase[user.index];
   //  return {...response, data: user, message: "Updated"};   
   //  }
   //  response.status = 400;
   //  response.message = "Bad Request";
   //  return response;
   const updatedUser = { id: id, ...user };
    if (updatedUser !== null) {
    UsersBase.push(updatedUser);
    response.status = 201;
    response.data = updatedUser;
    return {...response, data: updatedUser, message: "Updated"};   
    }
    response.status = 400;
    response.message = "Bad Request";
    return response;
    
  }