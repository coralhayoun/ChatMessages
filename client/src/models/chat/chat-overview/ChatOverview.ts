import { ChatMessageOverview } from "./ChatMessageOverview";

export interface ChatOverview {
    id: string;
    name: string;
    image: string;
    lastMessage: ChatMessageOverview;
};