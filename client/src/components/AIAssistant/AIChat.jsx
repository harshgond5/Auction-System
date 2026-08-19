import { useState } from "react";
import { FaTimes, FaPaperPlane } from "react-icons/fa";
import { sendMessage } from "../../services/aiServices";
import styles from "./AI.module.css";

export default function AIChat({ onClose }) {

    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "👋 Hello! I'm your AuctionHub AI Assistant.\n\nHow can I help you today?"
        }
    ]);

    const [input, setInput] = useState("");

async function handleSendMessage() {

    if (input.trim() === "") return;

    const message = input;

    setMessages(prev => [
        ...prev,
        {
            sender: "user",
            text: message,
        },
    ]);

    setInput("");

    const reply = await sendMessage(message);

    setMessages(prev => [
        ...prev,
        {
            sender: "ai",
            text: reply,
        },
    ]);
}

    return (

        <div className={styles.chatWindow}>

            <div className={styles.chatHeader}>

                <div>

                    <h3>AuctionHub AI</h3>

                    <span>Always here to help</span>

                </div>

                <button
                    className={styles.closeBtn}
                    onClick={onClose}
                >
                    <FaTimes />
                </button>

            </div>

            <div className={styles.chatBody}>

                {

                    messages.map((msg, index) => (

                        <div

                            key={index}

                            className={
                                msg.sender === "user"
                                    ? styles.userMessage
                                    : styles.aiMessage
                            }

                        >

                            {msg.text}

                        </div>

                    ))

                }

            </div>

            <div className={styles.chatInput}>

                <input
                    value={input}
                    placeholder="Ask anything..."
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSendMessage();
                        }
                    }}
                />

                <button onClick={handleSendMessage}>
                    <FaPaperPlane />
                </button>

            </div>

        </div>

    );

}