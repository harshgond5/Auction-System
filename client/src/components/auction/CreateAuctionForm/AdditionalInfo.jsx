import styles from "./CreateAuctionForm.module.css";

const accessoryList = [
    "Original Box",
    "Original Charger",
    "Bill / Invoice",
    "Warranty Card",
    "Earphones",
    "USB Cable",
    "Power Adapter",
    "Remote",
    "Stand",
    "Carry Case",
    "Manual",
    "Others"
];

export default function AdditionalInfo({ data, updateField }) {

    const toggleAccessory = (item) => {

        const accessories = [...data.accessories];

        if (accessories.includes(item)) {

            updateField(
                "accessories",
                accessories.filter((a) => a !== item)
            );

        } else {

            updateField(
                "accessories",
                [...accessories, item]
            );

        }

    };

    return (

        <section className={styles.card}>

            <h2>Additional Information</h2>

            <div className={styles.grid2}>

                <div className={styles.formGroup}>

                    <label>Warranty</label>

                   <details className={styles.dropdownBox}>

    <summary>

        {data.warranty || "Select Warranty"}

    </summary>

    <div className={styles.dropdownContent}>

        {[
            "No Warranty",
            "3 Months",
            "6 Months",
            "1 Year",
            "2 Years"
        ].map(item=>(

            <button
                type="button"
                key={item}
                onClick={()=>updateField("warranty",item)}
            >

                {item}

            </button>

        ))}

    </div>

</details>

                </div>

                <div className={styles.formGroup}>

                    <label>Return Policy</label>

                    <details className={styles.dropdownBox}>

    <summary>

        {data.returnPolicy || "Select Policy"}

    </summary>

    <div className={styles.dropdownContent}>

        {[
            "No Returns",
            "3 Days",
            "7 Days",
            "15 Days",
            "30 Days"
        ].map(item=>(

            <button
                type="button"
                key={item}
                onClick={()=>updateField("returnPolicy",item)}
            >

                {item}

            </button>

        ))}

    </div>

</details>

                </div>

            </div>

            <div className={styles.formGroup}>

                <label>Accessories Included</label>

                <details className={styles.dropdownBox}>

                    <summary>Accessories Included</summary>

                    <div className={styles.checkboxGrid}>

                        {accessoryList.map((item) => (
                            <label key={item}>
                                <input
                                    type="checkbox"
                                    checked={data.accessories?.includes(item)}
                                    onChange={() => toggleAccessory(item)}
                                />
                                {item}
                            </label>
                        ))}

                    </div>

                </details>

            </div>

            <div className={styles.formGroup}>

                <label>Tags</label>

                <input
                    value={data.tags}
                    placeholder="Apple, Laptop, Gaming, M4..."
                    onChange={(e) => updateField("tags", e.target.value)}
                />

            </div>

        </section>

    );

}