import React, { useState } from "react";
import ToggleHum from "../Nav/ToggleHum";
const btnStyle =
  "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
const SignInOut = () => {
  const [user, setUser] = useState(false);
  const handleSignIn = () => {
    setUser((pre) => !pre);
  };
  const handleSignOut = () => {
    setUser((pre) => !pre);
  };
  return (
    <>
      <div class="flex md:order-2">
        {user ? (
          <button onClick={handleSignIn} type="button" class={btnStyle}>
            Sign In
          </button>
        ) : (
          <button onClick={handleSignOut} type="button" class={btnStyle}>
            Sign Out
          </button>
        )}
        <ToggleHum />
      </div>
    </>
  );
};

export default SignInOut;
