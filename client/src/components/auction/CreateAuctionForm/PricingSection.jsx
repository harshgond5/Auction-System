import styles from "./CreateAuctionForm.module.css";

export default function PricingSection({ data, updateField }) {

    return (

        <section className={styles.card}>

            <h2>Pricing</h2>

            <div className={styles.grid2}>

                <div className={styles.formGroup}>

                    <label>Starting Price *</label>

                    <input
                        type="number"
                        value={data.startingPrice}
                        placeholder="10000"
                        onChange={(e)=>updateField("startingPrice",e.target.value)}
                    />

                </div>

                <div className={styles.formGroup}>

                    <label>Reserve Price</label>

                    <input
                        type="number"
                        value={data.reservePrice}
                        placeholder="15000"
                        onChange={(e)=>updateField("reservePrice",e.target.value)}
                    />

                </div>

                <div className={styles.formGroup}>

                    <label>Buy Now Price</label>

                    <input
                        type="number"
                        value={data.buyNowPrice}
                        placeholder="25000"
                        onChange={(e)=>updateField("buyNowPrice",e.target.value)}
                    />

                </div>

                <div className={styles.formGroup}>

                    <label>Minimum Bid Increment *</label>

                    <input
                        type="number"
                        value={data.bidIncrement}
                        placeholder="500"
                        onChange={(e)=>updateField("bidIncrement",e.target.value)}
                    />

                </div>

            </div>

        </section>

    );

}