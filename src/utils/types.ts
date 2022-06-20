export interface User {
    index?: number;
    id?: (() => string) | string;
    username: string;
    age: number;
    hobbies: string[];

}
export type Response = {
    status?: number;
    message?: string;
    data?: User | User[] | null;
  };