import { initializeDb } from "./dal/dbHandler";

export async function initServer() {
    await initializeDb();
}