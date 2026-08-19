import styles from "./CreateAuctionForm.module.css";

export default function ProductDetails({ data, updateField }) {
    return (
        <section className={styles.card}>

            <h2>Product Details</h2>

            <div className={styles.formGroup}>
                <label>Auction Title *</label>

                <input
                    type="text"
                    value={data.title}
                    placeholder="Apple MacBook Pro M4 Max"
                    onChange={(e) =>
                        updateField("title", e.target.value)
                    }
                />
            </div>

            <div className={styles.formGroup}>
                <label>Description *</label>

                <textarea
                    rows={6}
                    value={data.description}
                    placeholder="Describe your product..."
                    onChange={(e) =>
                        updateField("description", e.target.value)
                    }
                />
            </div>

            <div className={styles.grid2}>

                <div className={styles.formGroup}>

                    <label>Category *</label>

                    <select
                        value={data.category}
                        onChange={(e) =>
                            updateField("category", e.target.value)
                        }
                    >
                        <option value="">Select Category</option>
                        <option>Electronics</option>
                        <option>Mobiles</option>
                        <option>Laptops</option>
                        <option>Gaming</option>
                        <option>Fashion</option>
                        <option>Home Appliances</option>
                        <option>Furniture</option>
                        <option>Vehicles</option>
                        <option>Books</option>
                        <option>Collectibles</option>
                    </select>

                </div>
                <div className={styles.formGroup}>

                    <label>Brand *</label>

                    <input
                        type="text"
                        value={data.brand}
                        placeholder="Apple"
                        onChange={(e) =>
                            updateField("brand", e.target.value)
                        }
                    />

                </div>

                <div className={styles.formGroup}>

                    <label>Model</label>

                    <input
                        type="text"
                        value={data.model}
                        placeholder="MacBook Pro M4 Max"
                        onChange={(e) =>
                            updateField("model", e.target.value)
                        }
                    />

                </div>

                <div className={styles.formGroup}>

                    <label>Condition *</label>

                    <select
                        value={data.condition}
                        onChange={(e) =>
                            updateField("condition", e.target.value)
                        }
                    >
                        <option>New</option>
                        <option>Like New</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                        <option>Used</option>
                    </select>

                </div>
            </div>

        </section>
    );
}