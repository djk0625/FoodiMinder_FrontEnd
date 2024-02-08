import axios from 'axios';

const Api = axios.create({
    baseURL: "http://localhost:8080",
    timeout: "60000", // 1분
    headers: {
        "Content-Type" : `application/json;charset=UTF-8`,
        // "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
    }
})

export default Api;