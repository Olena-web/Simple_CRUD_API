
/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from  'fs';
import users from './users.json';
import {User} from '../utils/types';
console.log(users);

export const addDataToBase = ( filePath: string, content: {}): void => {
  
  fs.writeFileSync(filePath, JSON.stringify(content));
}
