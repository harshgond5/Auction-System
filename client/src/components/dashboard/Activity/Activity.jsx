import styles from "./Activity.module.css";

export default function Activity(){

    const activity=[

        "Created auction : iPhone 15",

        "Placed bid on Samsung S24",

        "Auction won : AirPods Pro",

        "Profile updated"

    ];

    return(

        <div className={styles.card}>

            <h2>Recent Activity</h2>

            {

                activity.map((item,index)=>(

                    <div
                        key={index}
                        className={styles.item}
                    >

                        {item}

                    </div>

                ))

            }

        </div>

    )

}