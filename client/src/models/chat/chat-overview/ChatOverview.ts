import { ChatMessageOverview } from "./ChatMessageOverview";

export interface ChatOverview {
    name: string;
    image: string;
    lastMessage: ChatMessageOverview;
};