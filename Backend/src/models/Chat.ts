import {v4 as uuid} from 'uuid';

export class Chat {
    id: any;
    name: string;
    participants: string[];

    constructor(name: string, participants: string[]) {
        this.id = uuid();
        this.name = name;
        this.participants = participants;
    }
}