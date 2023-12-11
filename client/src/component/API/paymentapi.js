import axios from 'axios'
import { serverhost } from '../../host'
import toast from 'react-hot-toast'
import { CounsellingForm } from './api'

export const CounsellingPayment = async (amount, user, id, navigate) => {

    const { data: { order } } = await axios.post(`${serverhost}/checkout`, {
        amount
    })
    const options = {
        key: "rzp_test_tRFotIAhLlWm3v",
        amount: order.amount,
        currency: "INR",
        name: "Durgesh chaudhary",
        description: "Counselling fees",
        image: "https://lh3.googleusercontent.com/-ESYjeDCxidA/AAAAAAAAAAI/AAAAAAAAAAA/AFNEGgJqao7nJGrWPKtghWKV6Z9tJIK6xQ/photo.jpg?sz=46",
        order_id: order.id,
        handler: async function (response) {
            try {
                const data = await axios.post(`${serverhost}/paymentverification`, response);
                if (data?.data?.success) {
                   CounsellingForm(user, id, navigate)
                }
            } catch (error) {
                toast.error('Payment Failed')
                console.log(error, "error");
            }
        },
        prefill: {
            name: user.fname,
            email: "durgeshchaudhary020401@gmail.com",
            contact: user.phonenumber
        },
        notes: {
            address: "Raebareli Uttar Pradesh"
        },
        theme: {
            "color": "#232354"
        }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
}