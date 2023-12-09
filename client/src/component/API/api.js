import axios from 'axios'
import { serverhost } from '../../host'
const token = localStorage.getItem('token')

export const fetchUsersData = async () => {
    return axios.get(`${serverhost}/users/`, {
        headers: {
            "Content-Type": "application/json",
            "authorization": `${token}`
        },
    })
        .then((res) => {
            return res.data.user
        })
        .catch((err) => {
            return err
        })
}

export const CounsellingPayment = async () => {
    const { data: { order } } = await axios.post(`${serverhost}/checkout`, {
        amount: 200
    })
    const options = {
        key: "rzp_test_tRFotIAhLlWm3v",
        amount: order.amount,
        currency: "INR",
        name: "Durgesh chaudhary",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: order.id,
        callback_url: `${serverhost}/paymentverification`,
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9000090000"
        },
        notes: {
            address: "Razorpay Corporate Office"
        },
        theme: {
            color: "#3399cc"
        }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
}

export const CounsellingForm = async (data) => {
    const data = await fetch(`${serverhost}/studentform`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fname, lastname, DOB, AIQRank, CRank, phonenumber,
            category, choice1, choice2, choice3, choice4, question, state
        })
    });
    const res = await data.json();
    if (res.status === (201)) {
        toast("Your form submitted successfully", {
            autoClose: 3000,
        })
        return true;
    } else {
        toast("Please Enter Correct Details!", {
            autoClose: 3000,
        })
        return false;
    }
}


