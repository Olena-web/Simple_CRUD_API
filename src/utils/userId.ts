import { v4 as uuidv4 } from 'uuid';

export const userId: string = uuidv4();


export function getUser(): string {
  return userId;
}

getUser();