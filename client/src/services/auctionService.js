import API from "./api";

export async function createAuction(auctionData) {

    try {

        const formData = new FormData();

        Object.keys(auctionData).forEach(key => {

            if (key !== "images") {

                formData.append(key, auctionData[key]);

            }

        });

        auctionData.images.forEach(image => {

            formData.append("images", image);

        });

        const response = await API.post(

            "/auctions",

            formData,

            {

                headers: {

                    "Content-Type": "multipart/form-data"

                }

            }

        );

        return response.data;

    }

    catch (error) {

        console.error(error);

        return {

            success: false,

            message: "Unable to create auction."

        };

    }

}