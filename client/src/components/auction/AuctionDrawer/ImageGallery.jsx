// ImageGallery.jsx

import { useState } from "react";

import {
    FaChevronLeft,
    FaChevronRight,
    FaExpand
} from "react-icons/fa";

import styles from "./AuctionDrawer.module.css";

export default function ImageGallery({

    images = [],

    selectedImage,

    setSelectedImage

}) {

    const [fullscreen, setFullscreen] = useState(false);

    const currentImage =
        images[selectedImage] || images[0];

    function previousImage() {

        setSelectedImage((prev) =>

            prev === 0

                ? images.length - 1

                : prev - 1

        );

    }

    function nextImage() {

        setSelectedImage((prev) =>

            prev === images.length - 1

                ? 0

                : prev + 1

        );

    }

    return (

        <>

            <section className={styles.gallery}>

                <div className={styles.mainImageWrapper}>

                    <img

                        src={currentImage}

                        alt="Auction"

                        className={styles.mainImage}

                    />

                    {

                        images.length > 1 && (

                            <>

                                <button

                                    className={`${styles.galleryArrow} ${styles.leftArrow}`}

                                    onClick={previousImage}

                                >

                                    <FaChevronLeft />

                                </button>

                                <button

                                    className={`${styles.galleryArrow} ${styles.rightArrow}`}

                                    onClick={nextImage}

                                >

                                    <FaChevronRight />

                                </button>

                            </>

                        )

                    }

                    <button

                        className={styles.expandBtn}

                        onClick={() =>

                            setFullscreen(true)

                        }

                    >

                        <FaExpand />

                    </button>

                </div>

                {

                    images.length > 1 && (

                        <div className={styles.thumbnailRow}>

                            {

                                images.map((image, index) => (

                                    <button

                                        key={index}

                                        onClick={() =>

                                            setSelectedImage(index)

                                        }

                                        className={

                                            index === selectedImage

                                                ?

                                                styles.activeThumbnail

                                                :

                                                styles.thumbnail

                                        }

                                    >

                                        <img

                                            src={image}

                                            alt=""

                                        />

                                    </button>

                                ))

                            }

                        </div>

                    )

                }

            </section>

            {

                fullscreen && (

                    <div

                        className={styles.lightbox}

                        onClick={() =>

                            setFullscreen(false)

                        }

                    >

                        <img

                            src={currentImage}

                            alt=""

                            className={styles.lightboxImage}

                        />

                    </div>

                )

            }

        </>

    );

}