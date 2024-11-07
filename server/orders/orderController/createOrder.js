import { Order } from "../orderModel/order.model.js"


export const createOrder = async(req,res)=>{
    try{
        // const{customerID, firstName, lastName, street, Hsnr, zipcode, city, floor, note, orderID, items} = req.body
        const {
            customer: {
                customerID,
                prename: firstName,
                surname: lastName,
                adress: { street, Hsnr, zipcode, city, floor, note }
            },
            order: { orderID, 
                items: items }
        } = req.body;

        console.log(firstName, items)
    //     const testItems = [{
    //         type: "burger",
    //         itemName: "BBQBurger",
    //         quantity: 2,
    //         itemID: "2",
    //         price: 12
    //     },
    //     {
    //         type: "burger",
    //         itemName: "cheeseBurger",
    //         quantity: 2,
    //         itemID: "1",
    //         price: 1
    //     },
    //     {
    //         type: "burger",
    //         itemName: "BBQBurger",
    //         quantity: 2,
    //         itemID: "4",
    //         price: 13
    //     },

    // ]
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
                orderID:orderID,
                items:items
            },
        })
        res.json(order)
    } catch (error){
        console.log(error)
        res.status(500).json({error: "Internal Server error"})
    }
}

