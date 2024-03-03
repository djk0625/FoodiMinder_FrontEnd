import React from "react";

import common from "../util/Common";
import loginApi from "../api/LoginApi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignUp() {
  const [duplChk, setDuplChk] = React.useState(false);
  const [input, setInput] = React.useState({
    userId: "",
    userPass: "",
    userPassChk: "",
    userName: "",
    userEmail: "",
    userPhone: "",
  })

  const handleClickDuplChk = async () => {
    if(common.checkNull(input.userId)) {
      alert("아이디를 입력해주세요.");
    } else {
      // TODO :: axios 커스텀 만들어야되고 에외처리해야됨
      // TODO :: api 호출 시 로딩창 구현
      const param = {userId: input.userId};
      console.log("idDuplChk Param :: ", param);
      const res = await loginApi.idDuplChk(param);
      console.log("idDuplChk Result :: ", res);
      if (res.resultCode === 1) {
        if (res.resultData) {
          alert("사용가능한 아이디입니다.");
          // TODO :: ID input readonly 처리
        } else {
          alert("이미 존재하는 아이디입니다.");
        }
      } else {
        alert("API 호출 오류 발생");
      }
    }
  }

  const handleChangePhone = (e) => {
    const chk = /^(|\d+)$/;
    if (chk.test(e.target.value)) {
      setInput((prev) => {return {...prev, userPhone: e.target.value}});
    }    
  }

  const handleClickSubmit = () => {
    if(submitCheck()) {
      alert("회원가입 API 호출 예정")
    }
    
  }

  const submitCheck = () => {
    if(common.checkNull(input.userId) || common.checkNull(input.userPass)
    || common.checkNull(input.userPassChk) || common.checkNull(input.userName)
    || common.checkNull(input.userEmail) || common.checkNull(input.userPhone)) {
      alert("입력되지 않은 항목이 존재합니다.");
      return false;
    }
    if (!duplChk) {
      alert("ID 중복체크를 진행해주세요.");
      return false;
    }
    if (input.userPass === input.userPassChk) {
      alert("비밀번호가 일치하지 않습니다.");
      return false;
    }    

    return true;
  }

  return (
    <>
      <Navbar />
        <div className="flex justify-center text-center items-center bg-main h-screen w-screen bg-cover bg-white dark:bg-slate-800">
        <div className="h-3/4 w-1/4 bg-gray-300 rounded-3xl">            
            <div className="inline-block w-full text-center pt-5 font-bold text-black">
              <p>회원가입</p>              
            </div>
            <hr className="w-11/12 border-gray-400 ml-5 mt-3"/>        
            <div className="inline-block h-4/5 w-full text-black">
              <div className="w-3/4 mt-10 text-left ml-16">
                <span className="font-extrabold text-sm">아이디</span>
              </div>
              <div className="mt-1">
                <input className="w-68 h-10 rounded-md shadow-md pl-2" type="text" value={input.userId} onChange={e => {setInput((prev) => {return {...prev, userId: e.target.value}})}} /> &nbsp;
                <button className="bg-slate-500 text-white font-extrabold rounded-md shadow-md w-20 h-9" onClick={handleClickDuplChk}>중복검사</button>
              </div>

              <div className="w-3/4 mt-5 text-left ml-16">
                <span className="font-extrabold text-sm">비밀번호</span>
              </div>
              <div className="mt-1">
                <input className="w-3/4 h-10 rounded-md shadow-md pl-2" type="password" value={input.userPass} onChange={e => {setInput((prev) => {return {...prev, userPass: e.target.value}})}} />
              </div>

              <div className="w-3/4 mt-5 text-left ml-16">
                <span className="font-extrabold text-sm">비밀번호 확인</span>
              </div>
              <div className="mt-1">
                <input className={input.userPass === input.userPassChk ? "w-3/4 h-10 rounded-md shadow-md pl-2 border border-green-500" : "w-3/4 h-10 rounded-md shadow-md pl-2 border border-red-600"} type="password" value={input.userPassChk} onChange={e => {setInput((prev) => {return {...prev, userPassChk: e.target.value}})}} />
              </div>

              <div className="w-3/4 mt-5 text-left ml-16">
                <span className="font-extrabold text-sm">이름</span>
              </div>
              <div className="mt-1">
                <input className="w-3/4 h-10 rounded-md shadow-md pl-2" type="text" value={input.userName} onChange={e => {setInput((prev) => {return {...prev, userName: e.target.value}})}} />
              </div>

              <div className="w-3/4 mt-5 text-left ml-16">
                <span className="font-extrabold text-sm">이메일</span>
              </div>
              <div className="mt-1">
                <input className="w-3/4 h-10 rounded-md shadow-md pl-2" type="text" value={input.userEmail} onChange={e => {setInput((prev) => {return {...prev, userEmail: e.target.value}})}} />
              </div>

              <div className="w-3/4 mt-5 text-left ml-16">
                <span className="font-extrabold text-sm">핸드폰번호</span>
              </div>
              <div className="mt-1">
                <input className="w-3/4 h-10 rounded-md shadow-md pl-2" type="text" value={input.userPhone} onChange={handleChangePhone} />
              </div>

              <div className="w-3/4 mt-11 text-left ml-26">
                <button className="bg-slate-600 text-white font-extrabold rounded-md shadow-md w-3/4 h-9" onClick={handleClickSubmit}>가입하기</button>
              </div>              
            </div>            
          </div>
        </div>      
      <Footer />
    </>
  );
}