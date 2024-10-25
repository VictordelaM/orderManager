import mongoose from 'mongoose';
import 'dotenv/config'
import express from 'express'
import orderRouter from './orders/orderRoutes/order.routes.js';


await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PW}@cluster0.ph5c6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)



const app = express()

const PORT = process.env.PORT
console.log(process.env.PORT)
app.use('/',orderRouter)


app.get('/', (req,res)=>{
    res.send('läuft')
})

app.listen(PORT, ()=>{
    console.log(`Server läuft auf port:${PORT}`)
})