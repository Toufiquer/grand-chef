import React, { useState } from "react";
import EmailPassLogIn from "./EmailPassLogIn";
import EmailPassRegistration from "./EmailPassRegistration";
import SocialLogIn from "./SocialLogIn";

const LogInRegister = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-full w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 m-4 border border-solid border-current rounded">
              {toggle ? (
                <EmailPassLogIn setToggle={setToggle} />
              ) : (
                <EmailPassRegistration setToggle={setToggle} />
              )}
            </div>
            <div className="p-4 m-4 border border-solid border-current rounded">
              <div className="flex items-center justify-center h-full ">
                <SocialLogIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInRegister;
