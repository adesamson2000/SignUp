import React, { useEffect, useState } from "react";

function Dashboard({ id }) {
  const [post, setPost] = useState({});
  // const [idvalue, setIdValue] = useState("");

  useEffect(() => {
    document.title = "Dashboard Page";
  }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <>
      <h1>Welcome to the dashboard page</h1>
      {/* <input
        name="idvalue"
        value={idvalue}
        placeholder="enter number"
        onChange={(event) => setIdValue(event.target.value)}
      /> */}

      {/* {post.map()=>} */}

      {/* <p>{post.id} </p>
      <h2>{post.title} </h2>
      <h3>{post.body} </h3> */}
    </>
  );
}

export default Dashboard;
