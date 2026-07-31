import { useState } from "react";
import styles from "./CreateAuctionForm.module.css";
import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";
import PricingSection from "./PricingSection";
import AuctionSettings from "./AuctionSettings";
import AdditionalInfo from "./AdditionalInfo";
import Acknowledgement from "./Acknowledgement";
import { createAuction } from "../../../services/auctionService";


export default function CreateAuctionForm() {
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

async function publishAuction(e){

    e.preventDefault();

    if(!auctionData.title){

        alert("Enter title");

        return;

    }

    if(auctionData.images.length===0){

        alert("Upload product images");

        return;

    }

    if(!auctionData.agree){

        alert("Accept acknowledgement");

        return;

    }

    setLoading(true);

    const response=await createAuction(

        auctionData

    );

    setLoading(false);

    if(response.success){

        alert("Auction Published Successfully");

    }

    else{

        alert(response.message);

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
