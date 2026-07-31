import axios from "axios";

const API = axios.create({

    baseURL:"http://localhost:5000/api"

});

export async function createAuction(data){

    try{

        const formData=new FormData();

        formData.append("title",data.title);
        formData.append("description",data.description);
        formData.append("category",data.category);
        formData.append("brand",data.brand);
        formData.append("condition",data.condition);

        formData.append("startingPrice",data.startingPrice);
        formData.append("reservePrice",data.reservePrice);
        formData.append("buyNowPrice",data.buyNowPrice);

        formData.append("startDate",data.startDate);
        formData.append("endDate",data.endDate);

        data.images.forEach(image=>{

            formData.append(

                "images",

                image.file

            );

        });

        const response=await API.post(

            "/auctions",

            formData,

            {

                headers:{

                    "Content-Type":"multipart/form-data"

                }

            }

        );

        return{

            success:true,

            data:response.data

        };

    }

    catch(err){

        console.log(err);

        return{

            success:false,

            message:

            err.response?.data?.message ||

            "Unable to create auction."

        };

    }

}