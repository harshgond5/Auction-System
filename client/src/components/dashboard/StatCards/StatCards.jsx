import styles from "./StatCards.module.css";

export default function StatCards({ stats = [] }) {

    return (
        <div className={styles.grid}>

            {stats.map((item, index) => (

                <div
                    key={index}
                    className={styles.card}
                >

                    <h2>{item.value}</h2>

                    <p>{item.title}</p>

                </div>

            ))}

        </div>
    );
}
