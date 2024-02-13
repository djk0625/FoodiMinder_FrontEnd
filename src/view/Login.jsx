import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

export default function Login() {  
  
  const handleClickDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <>
      <Navbar />
        <div className="flex justify-center items-center bg-main h-screen w-screen bg-cover bg-white dark:bg-slate-800">
          <div className="h-2/3 w-1/4 bg-gray-300 rounded-3xl">

          </div>
        </div>      
      <Footer />
    </>
  );
}