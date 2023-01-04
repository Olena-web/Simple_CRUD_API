import { userId } from '../utils/userId.js';
import { User} from '../utils/types.js';
import { getAllUsers } from './getAllUsers.js';
import {response} from '../utils/response.js';

let UsersBase = getAllUsers().data;
export const createUser = (user: User) => {
  return new Promise(async (resolve, reject) => {
    try {
    const newId = userId();
    const newUser = { id: newId, ...user };
    if (newUser !== null) {
    UsersBase.push(newUser);
    resolve(newUser);
    }
  }
    catch (error: any) {
      reject(new Error(error));
    }
  });
};