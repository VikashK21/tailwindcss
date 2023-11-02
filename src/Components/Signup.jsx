import React from "react";

export default function Signup() {
  return (
    <div>
      <div>Signup Account</div>
      <div>
        <div>
          <label>Full Name *</label>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div>
          <label>Email ID *</label>
          <input type="email" placeholder="Enter your email id" required />
        </div>
        <div>
          <label>Password *</label>
          <input type="password" placeholder="Create your password" required />
        </div>
        <div>
          <label>Confirm Password *</label>
          <input type="password" placeholder="Rewrite your password" required />
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </div>
    </div>
  );
}
