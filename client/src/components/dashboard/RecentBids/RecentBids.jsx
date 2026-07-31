import styles from "./RecentBids.module.css";

export default function RecentBids(){

    const bids=[
        {
            item:"Samsung S24 Ultra",
            amount:"₹72,000"
        },
        {
            item:"Rolex Watch",
            amount:"₹2,15,000"
        },
        {
            item:"Gaming PC",
            amount:"₹98,000"
        }
    ];

    return(

        <div className={styles.card}>

            <h2>Recent Bids</h2>

            {bids.map((bid,index)=>(

                <div
                    key={index}
                    className={styles.row}
                >
                    <span>{bid.item}</span>

                    <strong>{bid.amount}</strong>

                </div>

            ))}

        </div>

    )

}