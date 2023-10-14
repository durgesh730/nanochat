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