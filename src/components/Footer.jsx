import React from "react";

export default function Footer () {
  return(
    <>
      <footer>
        <div className="flex h-20 w-screen text-white bg-blue-300 font-extrabold text-base items-center">
          <div className="flex-1 pl-40">
            <a href="/">Copyright © 2024 Kim & Son</a>
          </div>
          <div className="flex-1 pr-40 text-right">
            Expiration Date Management System
          </div>
        </div>
      </footer>
    </>
  );
}