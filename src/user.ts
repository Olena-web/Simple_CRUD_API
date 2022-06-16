import { v4 as uuidv4 } from 'uuid';

export const user: string = uuidv4();


// "start": "node --loader ts-node/esm  src/index.js",
// "dev": "nodemon --delay 500ms",
export function getUser(): string {
  return user;
}
//export default getUser;
getUser();