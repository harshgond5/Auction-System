import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

export async function sendMessage(message) {

    try {

        const response = await API.post("/chat", {
            message,
        });

        return response.data.reply;

    } catch (error) {

        console.error(error);

        return "⚠️ Unable to connect to AuctionHub AI.";

    }

}