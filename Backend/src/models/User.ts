import {v4 as uuid} from 'uuid';

export class User {
    id: any;
    name: string;
    status: string;
    image: string;

    constructor(name: string, status: string, image: string) {
        this.id = uuid();
        this.name = name;
        this.status = status;
        this.image = image;
    }
}