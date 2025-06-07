import axios from "axios";

const apiRequests = axios.create({
    baseURL: 'localhost:8000/',
    headers: {
        "Content-Type": "application/json",
        Auth: "Bearer Token",
    }
})

export default apiRequests;