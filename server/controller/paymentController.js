import { instance } from "../app.js";
import crypto from 'crypto'
import { Payment } from "../models/paymentSchema.js";

export const check = async (req, res) => {
    var options = {
        amount: Number(req.body.amount * 100),
        currency: "INR",
        receipt: "rcptid_11"
    };
    const order = await instance.orders.create(options);
    res.status(200).json({
        success: true,
        order
    })
}

export const paymentVerification = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
        .update(body.toString())
        .digest("hex");

    const isAuthentic = expectedSignature == razorpay_signature;

    if (isAuthentic) {
        // Database comes here
        await Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        });

        res.status(200).json({
            msg: "Counselling Fee Paid Successfull",
            success: true,
            razorpay_payment_id: razorpay_payment_id
        })
    } else {
        res.status(400).json({
            success: false,
        });
    }
};