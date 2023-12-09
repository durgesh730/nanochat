import express from 'express'
import { check, paymentVerification } from '../controller/paymentController.js';

const payment = express.Router();

payment.post('/checkout', check)

payment.post('/paymentverification', paymentVerification)

export default payment  
