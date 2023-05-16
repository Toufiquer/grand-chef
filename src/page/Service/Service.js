import React, { useEffect } from "react";

const Service = () => {
  useEffect(() => {
    const tokenString = localStorage.getItem("token");
    const token = tokenString && JSON.parse(tokenString);
    token &&
      fetch("http://localhost:5000/verify", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: `Berar ${"example@gmail.com"} ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data, " => Line No: 4"));
    console.log("service", " => Line No: 12");
  }, []);
  return <div></div>;
};

export default Service;
