import {v4 as uuid} from 'uuid';

export class User {
    id: string;
    name: string;
    status: string;
    image: string;

    constructor(name: string, status: string, image: string, id? : string) {
        this.id = id || uuid();
        this.name = name;
        this.status = status;
        this.image = image;
    }
}