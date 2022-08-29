import React from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./Form";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup";
// import Assignment from "./Assignment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Form />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
