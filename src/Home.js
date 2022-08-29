import React from "react";

import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>WELCOME TO MY APP</h1>
      {/* <Link to="/login">Link to Login</Link> */}
      <Link to="/dashboard">Link to Dashboard</Link>
      <Link to="/Login"> Link to new Login</Link>
      <Link to="/Signup">Link to Signup</Link>
    </div>
  );
}

export default Home;
