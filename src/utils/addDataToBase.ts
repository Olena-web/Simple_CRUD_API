
/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from  'fs';
import users from './users.json';
import {User} from '../utils/types';
console.log(users);

export const addDataToBase = ( filePath: string, content: {}): void => {
  console.log(users.forEach((user: User ) => console.log(user)));
  fs.writeFileSync(filePath, JSON.stringify(content));
}
export const getUser = (id: string): User => {
    return users[0];
    }