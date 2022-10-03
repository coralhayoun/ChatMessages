import {v4 as uuid} from 'uuid';

export class Chat {
    id: string;
    name: string;
    participants: string[];

    constructor(name: string, participants: string[], id? :string) {
        this.id = id || uuid();
        this.name = name;
        this.participants = participants;
    }
}