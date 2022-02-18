import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID Yz8NtNP_AEh9cScMPbvWaX485qdrT_L9CH6WNI-yPPo",
    },
});
