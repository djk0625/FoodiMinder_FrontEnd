import Api from "./Api";

const apiExample = async (params) =>{    
        return Api.post("/path", JSON.stringify(params));
    }