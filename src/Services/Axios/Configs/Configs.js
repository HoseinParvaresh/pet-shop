import axios from "axios";


const apiRequests = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        "Content-Type": "application/json",
    }
})

export default apiRequests;