import express from "express";
import multer from "multer";
import { createOrder } from "../orderController/createOrder.js";

const orderRouter = express.Router()
const mult = multer({ storage: multer.memoryStorage() })

orderRouter.post('/',mult.none(),createOrder)

export default orderRouter