import { v4 as uuidv4 } from 'uuid';

export const userId = () => {
    const id = uuidv4();
    return id;
} 

