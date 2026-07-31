import styles from "./MyAuctions.module.css";

export default function MyAuctions() {

    const auctions = [
        {
            title: "iPhone 15 Pro",
            status: "Live",
            bids: 12,
        },
        {
            title: "MacBook Pro M3",
            status: "Draft",
            bids: 0,
        },
        {
            title: "Sony PS5",
            status: "Ended",
            bids: 24,
        },
    ];

    return (
        <div className={styles.card}>

            <h2>My Auctions</h2>

            <table>

                <thead>

                    <tr>
                        <th>Item</th>
                        <th>Status</th>
                        <th>Bids</th>
                    </tr>

                </thead>

                <tbody>

                    {auctions.map((item,index)=>(

                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.status}</td>
                            <td>{item.bids}</td>
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}