import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CreateAuctionForm.module.css";
import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";
import PricingSection from "./PricingSection";
import AuctionSettings from "./AuctionSettings";
import AdditionalInfo from "./AdditionalInfo";
import Acknowledgement from "./Acknowledgement";
import { createAuction } from "../../../services/auctionService";


export default function CreateAuctionForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
  const [auctionData, setAuctionData] = useState({
        title: "",
        description: "",

        category: "",
        subCategory: "",

        brand: "",
        model: "",

        condition: "New",

        quantity: 1,

        images: [],

        startingPrice: "",
        reservePrice: "",
        buyNowPrice: "",
        bidIncrement: "",

        startNow: true,
        startDate: "",
        endDate: "",

        pickup: false,
        shipping: true,
        shippingCost: "",

        dispatchTime: "",
        country: "India",
        state: "",
        city: "",

        warranty: "",
        returnPolicy: "",
        accessories: "",
        tags: "",

        agree: false

    });


    function updateField(name, value) {

        setAuctionData(prev => ({
            ...prev,
            [name]: value
        }));

    }

async function publishAuction(e) {
    e.preventDefault();

    if (!auctionData.title) {
        alert("Enter title");
        return;
    }
    if (!auctionData.description) {
        alert("Enter a description");
        return;
    }
    if (!auctionData.category) {
        alert("Select a category");
        return;
    }
    if (!auctionData.startingPrice || Number(auctionData.startingPrice) <= 0) {
        alert("Enter a valid starting price");
        return;
    }
    if (!auctionData.bidIncrement || Number(auctionData.bidIncrement) <= 0) {
        alert("Enter a valid minimum bid increment");
        return;
    }
    if (!auctionData.startNow && !auctionData.startDate) {
        alert("Choose a scheduled start date, or select Start Immediately");
        return;
    }
    if (!auctionData.endDate) {
        alert("Choose an auction end date");
        return;
    }
    if (auctionData.images.length === 0) {
        alert("Upload product images");
        return;
    }
    if (!auctionData.agree) {
        alert("Accept acknowledgement");
        return;
    }

    const startTime = auctionData.startNow
        ? new Date().toISOString()
        : new Date(auctionData.startDate).toISOString();

    const endTime = new Date(auctionData.endDate).toISOString();

    if (new Date(endTime) <= new Date(startTime)) {
        alert("Auction end time must be after the start time");
        return;
    }

    try {
        setLoading(true);

        const response = await createAuction({
            title: auctionData.title,
            description: auctionData.description,
            category: auctionData.category,
            condition: auctionData.condition,                   // ADDED THIS
            startingPrice: Number(auctionData.startingPrice),   // WRAPPED IN Number()
            minimumBidIncrement: Number(auctionData.bidIncrement), // RENAMED FIELD & WRAPPED IN Number()
            startTime,
            endTime,
            images: auctionData.images.map((_, i) => `https://via.placeholder.com/500?text=Product+Image+${i + 1}`)
        });

        if (response.success) {
            alert("Auction Published Successfully");
            navigate("/dashboard");
        } else {
            alert(response.message || "Failed to create auction");
        }

    } catch (error) {
        console.error("CREATE AUCTION ERROR:", error);
        alert(error.response?.data?.message || error.message || "Failed to create auction");
    } finally {
        setLoading(false);
    }
}

    function saveDraft() {

        console.log("Draft", auctionData);

    }

    return (

        <form
            className={styles.container}
            onSubmit={publishAuction}
        >

            <div className={styles.header}>

                <h1>Create Auction</h1>

                <p>
                    Fill the information below to publish your auction.
                </p>

            </div>

            <div className={styles.formGrid}>

    <div className={styles.leftColumn}>

        <ProductDetails
            data={auctionData}
            updateField={updateField}
        />

        <PricingSection
            data={auctionData}
            updateField={updateField}
        />


    </div>

    <div className={styles.rightColumn}>

        <ProductImages
            data={auctionData}
            updateField={updateField}
        />

        <AuctionSettings
            data={auctionData}
            updateField={updateField}
        />
       
    </div>

</div>
 <AdditionalInfo
            data={auctionData}
            updateField={updateField}
        />

<Acknowledgement
    data={auctionData}
    updateField={updateField}
/>

            <div className={styles.footer}>

                <button
                    type="button"
                    className={styles.secondaryBtn}
                    onClick={saveDraft}
                >
                    Save Draft
                </button>

                <button

                type="submit"

                className={styles.primaryBtn}

                disabled={loading}

                >

                {

                loading ? "Publishing...":"Publish Auction"}

</button>

            </div>

        </form>

    );

}
