import React from "react";

import Navbar from "../components/Navbar.jsx";
import FooterSmall from "../components/FooterSmall.jsx";
import common from "../util/CommonF.js"

export default function Join() {  

  const [input, setInput] = React.useState({
    userId: '',
    userPass: '',
    userPassChk: '',
    userName: '',
    userEmail: '',
    userPhone: ''
  })

  const handleSignInClick = () => {
    alert("로그인 버튼입니다.");
  }

  const handleInputChange = (e) => {
    switch(e.target.id) {
      case "userId":
        setInput((prev) => {
          return {...prev, userId: e.target.value}
        });
        break;

      case "userPass":
        setInput((prev) => {
          return {...prev, userPass: e.target.value}
        });
        break;

      case "userPassChk":
        setInput((prev) => {
            return {...prev, userPassChk: e.target.value}
        });
        break;

      case "userName":
        setInput((prev) => {
            return {...prev, userName: e.target.value}
        });
        break;

      case "userEmail":
        setInput((prev) => {
            return {...prev, userEmail: e.target.value}
        });
        break;

      case "userPhone":
        setInput((prev) => {
            return {...prev, userPhone: e.target.value}
        });
        break;

      default:
        break;
    }
  }

  return (
    <>
      <Navbar transparent />    
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-gray-900"
            style={{
              backgroundImage:
                "url(" + require("../assets/img/register_bg_2.png").default + ")",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat"
            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        회원가입
                      </h6>
                    </div>                    
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0 overflow-auto">                    
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          ID
                        </label>
                        <div className="flex">
                          <input
                            id = "userId"
                            type="text"
                            value={input.userId}
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="아이디를 입력하세요."
                            style={{ transition: "all .15s ease" }}
                            onChange={handleInputChange}
                          /> &nbsp;
                          <button                
                            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-9"
                            type="button"
                            style={{ transition: "all .15s ease", width: "30%" }}
                            onClick={handleSignInClick}
                          >
                          중복확인
                          </button>
                        </div>                        
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          id="userPass"
                          type="password"
                          value={input.userPass}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="비밀번호를 입력하세요."
                          style={{ transition: "all .15s ease" }}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password Check
                        </label>
                        <input
                          id="userPassChk"
                          type="password"
                          value={input.userPassChk}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="비밀번호를 한번 더 입력하세요."
                          style={{ transition: "all .15s ease" }}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          NAME
                        </label>
                        <input
                          id = "userName"
                          type="text"
                          value={input.userName}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="이름을 입력하세요."
                          style={{ transition: "all .15s ease" }}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          EMAIL
                        </label>
                        <input
                          id = "userEmail"
                          type="text"
                          value={input.userEmail}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="이메일을 입력하세요."
                          style={{ transition: "all .15s ease" }}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          PHONE NUMBER
                        </label>
                        <input
                          id = "userPhone"
                          type="text"
                          value={input.userPhone}
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="핸드폰번호를 입력하세요."
                          style={{ transition: "all .15s ease" }}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="text-center mt-6">
                        <button                
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                          onClick={handleSignInClick}
                        >
                          인증요청
                        </button>
                      </div>                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
