import styles from "./StatsCards.module.css";

export default function StatsCards() {

    const stats = [
        {
            title: "Active Listings",
            value: 5,
        },
        {
            title: "Active Bids",
            value: 8,
        },
        {
            title: "Won Auctions",
            value: 2,
        },
        {
            title: "Wallet",
            value: "₹25,400",
        },
    ];

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