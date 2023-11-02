import React from "react";
import Login from "../../Components/Login";
import Signup from "../../Components/Signup";

export default function Account() {
  return (
    <div className="border phone:px-2 font-serif md:px-40 lg:px-96 xl:mx-80 xl:px-40 ">
      <Login />
      {/* <Signup /> */}
    </div>
  );
}
