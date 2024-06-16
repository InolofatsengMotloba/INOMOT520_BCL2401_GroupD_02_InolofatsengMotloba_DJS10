import React from "react";
import { useState, useEffect } from "react";

export default BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Data fetching failed");
        }

        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchPosts();
  }, []);

  if (error) {
    return <h1>Data fetching failed</h1>;
  }

  return <></>;
};
