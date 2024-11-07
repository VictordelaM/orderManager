import mongoose, { Schema } from "mongoose";
import { type } from "os";


const ingridientsReadyModel = new Schema ({
    name:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    quantityType:{
        type: String,
        required: true
    },
    
    // pictureUrl:{
    //     type: String,
    //     required: false
    // },
    
    
})

const stepModel = new Schema ({
    Nr: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required:true
    }
})

const recieptModell = new Schema ({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    ingridientsReady:[ingridientsReadyModel],
    steps: [stepModel]
    

})

export const Reciept = mongoose.model("Reciept", recieptModell, "Reciepts")