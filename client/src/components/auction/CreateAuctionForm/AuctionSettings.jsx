import styles from "./CreateAuctionForm.module.css";

export default function AuctionSettings({ data, updateField }) {

    return (

        <section className={styles.card}>

            <h2>Auction Settings</h2>

            <div className={styles.formGroup}>

                <label>Auction Starts</label>

                <div className={styles.radioGroup}>

                    <label>

                        <input
                            type="radio"
                            checked={data.startNow}
                            onChange={() => updateField("startNow", true)}
                        />

                        Start Immediately

                    </label>

                    <label>

                        <input
                            type="radio"
                            checked={!data.startNow}
                            onChange={() => updateField("startNow", false)}
                        />

                        Schedule Auction

                    </label>

                </div>

            </div>

            {!data.startNow && (

                <div className={styles.formGroup}>

                    <label>Scheduled Start</label>

                    <input
                        type="datetime-local"
                        value={data.startDate}
                        onChange={(e) =>
                            updateField("startDate", e.target.value)
                        }
                    />

                </div>

            )}

            <div className={styles.formGroup}>

                <label>Auction End *</label>

                <input
                    type="datetime-local"
                    value={data.endDate}
                    onChange={(e) =>
                        updateField("endDate", e.target.value)
                    }
                />

            </div>

        </section>

    );

}