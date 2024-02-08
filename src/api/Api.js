import axios from 'axios';

axios.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      console.log(err);
      throw new Error("Request Fail");
    }
  );

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