import { response } from "../utils/response.js";
import { User } from "../utils/types.js";
import { getAllUsers } from "./getAllUsers.js";
let UsersBase = getAllUsers().data;

export const updateUser = (id: string, user: User) => {
    let userToUpdate: User = UsersBase.find(user => user.id === id);
    const userIndex = UsersBase.findIndex(user => user.id === id);
    if (userToUpdate) {
      UsersBase[userIndex] = { id, ...user };
      response.status = 201;
      return {...response, data: user, message: "Updated"};   
    }
    else {
      response.status = 400;
      response.message = "Bad Request";
      return response;
    }
  }