import DrawerHeader from "../AuctionDrawer/DrawerHeader";

import styles from "./QuickBid.module.css";

export default function QuickBid({close}){

    return(

        <>

        <DrawerHeader

            title="Quick Bid"

            subtitle="Place your bid instantly"

            onClose={close}

        />

        <div className={styles.body}>

            <div className={styles.priceCard}>

                <span>Current Bid</span>

                <h1>₹42,500</h1>

            </div>

            <label>Your Bid</label>

            <input
                type="number"
                defaultValue={43000}
            />

            <div className={styles.buttons}>

                <button>+₹500</button>

                <button>+₹1000</button>

                <button>+₹2000</button>

            </div>

            <div className={styles.summary}>

                <div>

                    <span>Current</span>

                    <strong>₹42,500</strong>

                </div>

                <div>

                    <span>Your Bid</span>

                    <strong>₹43,000</strong>

                </div>

            </div>

        </div>

        <div className={styles.footer}>

            <button>

                Place Bid

            </button>

        </div>

        </>

    )

}