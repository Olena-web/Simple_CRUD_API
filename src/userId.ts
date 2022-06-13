import uuid from 'uuid';

export default function userId() {
    const userId: string = uuid.v4();
    console.log(userId);
    return userId;
}