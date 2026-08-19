import { FaRobot } from "react-icons/fa";

import styles from "./AI.module.css";

export default function AIButton({ onClick }) {

    return (

        <button
            className={styles.aiButton}
            onClick={onClick}
            title="AuctionHub AI Assistant"
        >

            <FaRobot />

        </button>

    );

}