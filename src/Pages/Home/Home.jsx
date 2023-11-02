import React from "react";

export default function Home() {
  return (
    <div>
      <nav className="border phone:text-xs bg-orange-500 flex space-x-4 space-x-reverse flex-row-reverse font-semibold py-5 text-xl">
        <span></span>
        <span className="cursor-pointer">Login/Sign In</span>
        <span className="cursor-pointer">Home</span>
        <span className="cursor-pointer">About</span>
        <span className="cursor-pointer">Contact</span>
        <span className="cursor-pointer">Profile</span>
      </nav>
      <div>
        <h1 className="phone:text-lg phone:text-center phone:px-5 text-4xl font-extrabold text-green-600 px-32 py font-poppins">Welcome to FLURN Learning Center</h1>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
          veniam perferendis. Commodi veritatis sint optio mollitia ut. Autem,
          nihil. Odio ipsum dolorum eum minima reprehenderit enim ab atque vero
          minus!
        </p> */}
      </div>
    </div>
  );
}
