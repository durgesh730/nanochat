import axios from 'axios'
import { serverhost } from '../../host'
import toast from 'react-hot-toast'

export const CounsellingPayment = async (amount) => {

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
               await axios.post(`${serverhost}/paymentverification`, response);
            } catch (error) {
                toast.error('Payment Failed')
                console.log(error, "error");
            }
        },
        prefill: {
            name: "Umesh Chaudhary",
            email: "durgeshchaudhary020401@gmail.com",
            contact: "8052941488"
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