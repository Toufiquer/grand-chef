import React from "react";
import { Link } from "react-router-dom";
import SignInOut from "../SignInOut/SignInOut";
import Ul from "./Ul";

const Nav = () => {
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Grand Chef
            </span>
          </Link>

          <SignInOut />

          <Ul />
        </div>
      </nav>
    </>
  );
};

export default Nav;
