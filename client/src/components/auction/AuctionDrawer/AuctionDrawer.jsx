import { useState } from "react";
import DrawerHeader from "./DrawerHeader";
import ImageGallery from "./ImageGallery";
import AuctionInfo from "./AuctionInfo";
import BidPanel from "./BidPanel";

import styles from "./AuctionDrawer.module.css";

export default function AuctionDrawer({

    open,

    auction,

    onClose

}) {

    const [wishlisted, setWishlisted] = useState(false);

    const [selectedImage, setSelectedImage] = useState(0);

    if (!auction) return null;

    const images =
        auction.images?.length > 0
            ? auction.images
            : [auction.image];

    async function handleShare() {

        if (navigator.share) {

            await navigator.share({

                title: auction.title,

                text: auction.title,

                url: window.location.href

            });

        }

        else {

            navigator.clipboard.writeText(window.location.href);

            alert("Auction link copied.");

        }

    }

    return (

        <>

            {open && (

                <div

                    className={styles.overlay}

                    onClick={onClose}

                />

            )}

            <aside

                className={`${styles.drawer} ${open ? styles.open : ""}`}

            >

                <DrawerHeader

                    auction={auction}

                    wishlisted={wishlisted}

                    onWishlist={() =>

                        setWishlisted(!wishlisted)

                    }

                    onShare={handleShare}

                    onClose={onClose}

                />

                <div className={styles.body}>

                    <ImageGallery

                        images={images}

                        selectedImage={selectedImage}

                        setSelectedImage={setSelectedImage}

                    />

                    <AuctionInfo

                        auction={auction}

                    />

                </div>

                <BidPanel

                    auction={auction}

                />

            </aside>

        </>

    );

}