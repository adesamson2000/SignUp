import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [currentlevel, setCurrentLevel] = useState(1);
  return (
    <div>
      <form>
        <h2>Step {currentlevel} </h2>
        <BasicInfo
          currentlevel={currentlevel}
          setCurrentLevel={setCurrentLevel}
        />
        <AuthInfo
          currentlevel={currentlevel}
          setCurrentLevel={setCurrentLevel}
        />
        <PaymentInfo
          currentlevel={currentlevel}
          setCurrentLevel={setCurrentLevel}
        />
      </form>
    </div>
  );
}

export default Signup;

function BasicInfo({ currentlevel, setCurrentLevel }) {
  if (currentlevel === 1) {
    return (
      <>
        <h1>Basic Information</h1>
        <div>
          <label>Firstname</label>
          <input type="text" name="firstname" placeholder="john" />
          <div>
            <label>Lastname</label>
            <input type="text" name="lastname" placeholder="doe" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" placeholder="johndoe@gmail.com" />
          </div>
          <div>
            <label>Gender</label>
            <select>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="neutral">Dont want to say</option>
            </select>
          </div>
        </div>
        <button type="button" onClick={() => setCurrentLevel(currentlevel + 1)}>
          Next
        </button>
      </>
    );
  } else {
    return null;
  }
}

function AuthInfo({ currentlevel, setCurrentLevel }) {
  if (currentlevel === 2) {
    return (
      <>
        <h1>Authentication Information</h1>
        <div>
          <label htmlFor="">Username</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" name="password" />
        </div>
        <div>
          <label htmlFor=""> Confirm Password</label>
          <input type="password" name="confirmpassword" />
        </div>
        <div id="flex">
          <button
            type="button"
            onClick={() => setCurrentLevel(currentlevel - 1)}
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => setCurrentLevel(currentlevel + 1)}
          >
            Next
          </button>
        </div>
      </>
    );
  } else {
    return null;
  }
}
function PaymentInfo({ currentlevel, setCurrentLevel }) {
  if (currentlevel === 3) {
    return (
      <>
        <h1>Payment Information</h1>
        <div>
          <label>BVN</label>
          <input type="text" name="bvn" />
        </div>
        <div>
          <label>Bank Name</label>
          <select name="bankName">
            <option value="uba">UBA</option>
            <option value="firstbank">FIRST BANK</option>
            <option value="zenithbank">ZENITH BANK</option>
            <option value="gtbank"> GTBANK</option>
          </select>
        </div>
        <div>
          <label>Account Number</label>
          <input type="text" name="accountNumber" />
        </div>
        <div id="flex">
          <button
            onClick={() => setCurrentLevel(currentlevel - 1)}
            type="button"
          >
            Previous
          </button>
          <button type="submit">Complete Registration</button>
        </div>
      </>
    );
  } else {
    return null;
  }
}
