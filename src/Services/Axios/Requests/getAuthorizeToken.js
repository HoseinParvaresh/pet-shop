import apiRequests from "../Configs/Configs";

export default async function getAuthorizeToken() {
    const data = {
        email: "parvaresh.dev@gmail.com",
        password: "hosein2681"
    }
    try {
        const res = await apiRequests.post('/users/login/', data);

        if (res.status === 200) {
            return res
        }
    } catch (error) {
        if (error.response?.status === (500 || 400)) {
            return false
        }
    }
}
