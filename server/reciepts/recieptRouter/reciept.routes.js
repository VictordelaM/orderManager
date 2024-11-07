import express from "express";
import multer from "multer";
import { createReciept } from "../recieptController/createReciepts.js";

const recieptRouter = express.Router()
const mult = multer({ storage: multer.memoryStorage() })

recieptRouter.post('/addReciept',mult.none(),createReciept)

export default recieptRouter