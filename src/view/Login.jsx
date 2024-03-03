import React from "react";
import { useNavigate } from 'react-router-dom';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import googleBtn from "../assets/img/google.svg";
import kakaoBtn from "../assets/img/kakao.svg";

export default function Login() {

  const [input, setInput] = React.useState({
    userId: '',
    userPass: ''
  })

  const navigate = useNavigate();
  
  const handleClickDarkMode = () => {
    document.documentElement.classList.toggle("dark")
  }

  const handleClickGoogle = () => {
    alert("구글 가입, 로그인 버튼입니다.");
  }

  const handleClickKakao = () => {
    window.open("https://kauth.kakao.com/oauth/authorize?client_id=5d6866579ca70b4f2ea3e7dd9ab419d7&redirect_uri=http://localhost:8080/api/user/kakao/getAuthCode&response_type=code");
  }

  const handleClickSignIn = () => {
    alert("로그인 버튼입니다.");
  }

  return (
    <>
      <Navbar />
        <div className="flex justify-center text-center items-center bg-main h-screen w-screen bg-cover dark:bg-main-dark">
            {/* <button className="bg-slate-500" onClick={handleClickDarkMode}>
              black
            </button> */}
          <div className="h-2/4 w-1/4 bg-gray-300 rounded-3xl">            
            <div className="inline-block w-full h-1/5 text-center pt-5 font-bold text-black">
              <p>Sing in with</p>
              <ul className="flex pt-2 justify-center">
                <li>
                  <div className="flex bg-slate-200 rounded-lg items-center w-24 h-9">
                    <button className="flex ml-1 w-6 h-6 items-center" onClick={handleClickGoogle}>
                      <img src={googleBtn} alt="google" />
                      <span className="ml-1 font-semibold text-sm">GOOGLE</span>
                    </button>                    
                  </div>
                </li>
                <li className="ml-2">
                  <div className="flex bg-slate-200 rounded-lg items-center w-24 h-9">
                    <button className="flex ml-2 w-6 h-6 items-center" onClick={handleClickKakao}>
                      <img src={kakaoBtn} alt="kakao" />            
                      <span className="ml-1 font-semibold text-sm">KAKAO</span>
                    </button>                
                  </div>
                </li>
              </ul>              
            </div>
            <hr className="w-11/12 border-gray-400 ml-5 mt-3"/>        
            <div className="inline-block h-4/5 w-full text-black">
              <div className="w-3/4 mt-10 text-left ml-16">
                <span className="font-extrabold text-sm">아이디</span>
              </div>
              <div className="mt-1">
                <input className="w-3/4 h-10 rounded-md shadow-md pl-2" type="text" value={input.userId} onChange={e => {setInput((prev) => {return {...prev, userId: e.target.value}})}}/>
              </div>

              <div className="w-3/4 mt-5 text-left ml-16">
                <span className="font-extrabold text-sm">비밀번호</span>
              </div>
              <div className="mt-1">
                <input className="w-3/4 h-10 rounded-md shadow-md pl-2" type="password" value={input.userPass} onChange={e => {setInput((prev) => {return {...prev, userPass: e.target.value}})}}/>
              </div>

              <div className="w-3/4 mt-11 text-left ml-26">
                <button className="bg-slate-600 text-white font-extrabold rounded-md shadow-md w-3/4 h-9" onClick={handleClickDarkMode}>로그인</button>
              </div>
              <div className="w-3/4 mt-3 text-left ml-26">
                <button className="bg-slate-600 text-white font-extrabold rounded-md shadow-md w-3/4 h-9" onClick={() => navigate('SignUp')}>회원가입</button>
              </div>
            </div>            
          </div>
        </div>      
      <Footer />
    </>
  );
}