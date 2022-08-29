import React, { useState } from "react";

function Assignment() {
  const [value, setValue] = useState(true);
  function changePage() {
    setValue(!value);
  }
  return (
    <div>
      {value === true ? <Milk /> : <Vital />}
      {/* <Milk git="glitters" got="gold" gone="available" />
      <Coffee git="glitters" got="gold" gone="available" />
      <Vital git="glitters" got="gold" gone="available" /> */}
      <button onClick={changePage}>my button</button>
    </div>
  );
}

export default Assignment;

function Milk({ git, got, gone }) {
  const [get, setGet] = useState("Sam");
  const [gist, setGist] = useState("Dammy");
  const [gent, setGent] = useState("Olaa");
  function changeGet() {
    setGet("whats this");
  }
  return (
    <div>
      <h1>{git} </h1>
      <h2>{got} </h2>
      <h3>{gone} </h3>
      <div>{get} </div>
      <div>{gist} </div>
      <div>{gent} </div>
      <p onClick={changeGet}>Hey,whatsup</p>
    </div>
  );
}

function Coffee({ git, got, gone }) {
  const [get, setGet] = useState("Samson");
  const [gist, setGist] = useState("Seun");
  const [gent, setGent] = useState("Ayoola");
  function changeGet() {
    setGet("Muhammed buharii");
  }

  return (
    <div>
      <h1>{git} </h1>
      <h2>{got} </h2>
      <h3>{gone} </h3>
      <div>{get} </div>
      <div>{gist} </div>
      <div>{gent} </div>
      <p onClick={changeGet}>how u doing</p>
    </div>
  );
}
function Vital({ git, got, gone }) {
  const [get, setGet] = useState("Lol");
  const [gist, setGist] = useState("Abdul");
  const [gent, setGent] = useState("Mide");
  function changeButton() {
    setGent("this is a paragraph");
  }
  return (
    <div>
      <h1>{git}</h1>
      <h2>{got}</h2>
      <h3>{gone}</h3>
      <div>{get} </div>
      <div>{gist} </div>
      <div>{gent} </div>
      <p></p>
      <button onClick={changeButton}>button</button>
    </div>
  );
}
