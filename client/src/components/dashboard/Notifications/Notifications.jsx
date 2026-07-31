import styles from "./Notifications.module.css";

export default function Notifications(){

    const notifications=[

        "🎉 Your bid is leading.",

        "📦 MacBook auction ends in 2 hours.",

        "💰 Wallet credited with ₹5,000."

    ];

    return(

        <div className={styles.card}>

            <h2>Notifications</h2>

            <ul>

                {

                    notifications.map((item,index)=>(

                        <li key={index}>{item}</li>

                    ))

                }

            </ul>

        </div>

    )

}