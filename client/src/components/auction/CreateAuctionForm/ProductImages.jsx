import styles from "./CreateAuctionForm.module.css";

export default function ProductImages({ data, updateField }) {

    function handleImages(e) {

        const files = Array.from(e.target.files);

        updateField("images", [...data.images, ...files]);

    }

    function removeImage(index) {

        const updated = data.images.filter((_, i) => i !== index);

        updateField("images", updated);

    }

    return (

        <section className={styles.card}>

            <h2>Product Images</h2>

            <p className={styles.sectionText}>
                Upload high quality product images. First image will be used as the thumbnail.
            </p>

            <label className={styles.uploadBox}>

                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImages}
                    hidden
                />

                <div>

                    <h3>Click to Upload Images</h3>

                    <p>
                        JPG, PNG, WEBP
                    </p>

                    <span>
                        Maximum 10 Images
                    </span>

                </div>

            </label>

            {

                data.images.length > 0 && (

                    <div className={styles.imageGrid}>

                        {

                            data.images.map((image, index) => (

                                <div
                                    key={index}
                                    className={styles.imageCard}
                                >

                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt=""
                                    />

                                    {

                                        index === 0 && (

                                            <span className={styles.thumbnailBadge}>
                                                Thumbnail
                                            </span>

                                        )

                                    }

                                    <button
                                        type="button"
                                        className={styles.deleteImage}
                                        onClick={() => removeImage(index)}
                                    >
                                        ✕
                                    </button>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </section>

    );

}