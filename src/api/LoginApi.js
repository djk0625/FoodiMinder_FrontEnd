import Api from "./Api";

const apiExample = async (params) =>{    
        const res = await Api.post("/path", params)
        //TODO :: 이거 json -> object 로 안바꿔도되나..
        console.log(res.data)
        return res.data;
    }