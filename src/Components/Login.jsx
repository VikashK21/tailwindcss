import React from "react";

export default function Login() {
  return (
    <div className="border border-green-700 rounded-md px-4 py-4">
      <div className="font-extrabold text-xl text-green-500">
        Login Account
      </div>
      <div className="mt-4 flex flex-col gap-3 px-2 text-base">
        <div className="flex flex-col gap-2">
          <label>
            Email ID <span className="text-orange-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email id"
            required
            className="border p-1 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label>
            Password <span className="text-orange-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="border p-1 rounded-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="border phone:text-base float-right text-lg bg-green-700 hover:bg-green-800 active:text-sm rounded-lg p-2 m-2 "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
