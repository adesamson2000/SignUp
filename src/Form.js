import React, { useState } from "react";

function Form() {
  const intialvalue = {
    name: "",
    email: "",
    password: "",
  };
  const [inputs, setInputs] = useState(intialvalue);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputs);
    // console.log("form submitted");
    // console.log(name)
  }
  function handleChange(event) {
    setInputs((intial) => {
      console.log(event.target.name);
      return {
        ...intial,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Fullname</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter Your Fullname"
          value={inputs.name}
          name="name"
        />
      </div>
      <div>
        <label>Email</label>
        <input
          onChange={handleChange}
          name="email"
          value={inputs.email}
          type="email"
          placeholder="Enter Your Email"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          onChange={handleChange}
          name="password"
          value={inputs.password}
          type="password"
          placeholder="Enter Your Password"
        />
      </div>
      <div>
        <input type="Submit" />
      </div>
    </form>
  );
}

export default Form;
