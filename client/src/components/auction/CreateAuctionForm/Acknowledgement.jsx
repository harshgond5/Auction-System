import styles from "./CreateAuctionForm.module.css";

export default function Acknowledgement({

    data,

    updateField

}){

    return(

        <section className={styles.card}>

            <h2>Acknowledgement</h2>

            <div className={styles.acknowledgement}>

                <label>

                    <input

                        type="checkbox"

                        checked={data.agree}

                        onChange={(e)=>

                            updateField(

                                "agree",

                                e.target.checked

                            )

                        }

                    />

                    I confirm that all information provided is true and accurate.

                </label>

                <label>

                    <input
                        type="checkbox"
                        checked
                        disabled
                    />

                    I understand AuctionHub may remove misleading listings.

                </label>

                <label>

                    <input
                        type="checkbox"
                        checked
                        disabled
                    />

                    I agree to AuctionHub Terms & Conditions.

                </label>

            </div>

        </section>

    );

}