import { Order } from "../orderModel/order.model.js"


export const createOrder = async(req,res)=>{
    try{
        const{customerID, firstName, lastName, street, Hsnr, zipcode, city, floor, note, orderID} = req.body
        console.log(firstName)
        const order = await Order.create({
            customer:{
                customerID: customerID,
                prename: firstName,
                surname: lastName,
                adress:{
                    street:street,
                    Hsnr: Hsnr,
                    zipcode: zipcode,
                    city: city,
                    floor:floor,
                    note:note
                }
            },
            order:{
                orderID:orderID
            }
        })
        res.json(order)
    } catch (error){
        console.log(error)
        res.status(500).json({error: "Internal Server error"})
    }
}

