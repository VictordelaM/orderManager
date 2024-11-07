import mongoose, { Schema } from "mongoose";
import { type } from "os";

const item = new Schema ({

    //Pizza Burger etc
    type:{
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    itemID: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }


})

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
        },
        items: [item]
    }}
)

export const Order = mongoose.model("Order", orderSchema, "Orders")