import { Reciept } from "../recieptModell/reciept.modell.js";

export const createReciept = async(req,res)=>{
    try{
        const {name, category, ingridientsReady, steps} = req.body
        const reciept = await Reciept.create({
            name: name,
            category: category,
            ingredientsReady:ingridientsReady,
            steps: steps
        })
        res.json(reciept)
    }catch (error){
        console.log(error)
        res.status(500).json({error: "Internal Server error"})
    }
    
}