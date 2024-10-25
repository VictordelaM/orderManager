import mongoose, { Schema } from "mongoose";
import { type } from "os";


const orderSchema = new Schema ({
    customer:{
        customerID:{
            type: String,
 //required: true
        },
        prename: {
            type: String,
 //required: true
        },
        surname: {
            type: String,
 //required: true
        },
        adress:{
            street:{
            type: String,
 //required: true
            },
            HsNr:{
                type: String,
     //required: true
            },
            zipcode:{
                type: Number,
     //required: true
            },
            city:{
                type: String,
     //required: true
            },
            floor:{
                type: String,
            },
            note:{
                type: String,
            },
        },
    },
        order:{
        orderID:{
            type: String,
            // required:true,
        }
    }}
)

export const Order = mongoose.model("Order", orderSchema, "Orders")