import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/auth",
    withCredentials: true
})

// Step 3 : send authorization code our backend through api ->  GET /auth/google?code=xyz123
export const googleAuth = (code) => api.get(`/google?code=${code}`)

export const logoutUser = () => api.post("/logout");