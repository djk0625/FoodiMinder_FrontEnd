import React from "react";
import { Link } from "react-router-dom";

export default function Navbar () {
  return(
    <>
      <nav>
        <div className="absolute flex h-20 w-screen text-white bg-black font-extrabold text-base items-center">
          <div className="flex-1 pl-40">
            <Link to="/">FOODIMINDER</Link>
          </div>
          <div className="flex-1 pr-40">          
            <ul className="flex pl-64 text-right">
              <li className="flex-1">
                <a href="/">CONTACT US</a>
              </li>
              <li className="flex-1">
                <a href="/">DJKIM'S GITHUB</a>
              </li>
              <li className="flex-1">
                <a href="/">SHSON'S GITHUB</a>
              </li>
            </ul>          
          </div>
        </div>
      </nav>
    </>
  );
}