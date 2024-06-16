import React from "react";
import { useState, useEffect } from "react";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        

        if (!response.ok) {
          throw new Error("Data fetching failed");
        }

        const data = await response.json();
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

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post, index) => (
        <div key={post.id}>
          <h2>
            {index + 1}. {post.title}
          </h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
