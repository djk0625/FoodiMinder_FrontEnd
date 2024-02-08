import Api from "./Api";

const loginApi = {
    apiExample: async (params) =>{    
        return Api.post("/path", JSON.stringify(params));
    }
}

export default loginApi;