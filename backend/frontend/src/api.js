import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

// axios to handle network requests
// get api
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

// check local storage for access tokens and add to authorization headers

// interceptor function
api.interceptors.request.use(
    // check local storage if it contains access token and adds it to authorization headers to request
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}` //pass jwt access token
        }
        return config
    },
    // to handle errors if access was not successful
    (error) => {
        return Promise.reject(error)
    }
)

export default api