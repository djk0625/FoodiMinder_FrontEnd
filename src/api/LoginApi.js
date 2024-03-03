import axios from "axios";

/**
 * 공통 함수 정의
 */

const LoginApi = {
    /**
    * id 중복 체크    
    */
    idDuplChk: async (params) => await axios.post("/api/user/idDuplChk",params,     
      ).then(response => {return response.data;})
    }
    
    export default LoginApi;