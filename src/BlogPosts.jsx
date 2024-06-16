import React from "react";
import { useState, useEffect } from "react";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]); // State to hold posts fetched from API
  const [error, setError] = useState(null); // State to handle errors during fetching

  // useEffect hook to fetch data
  React.useEffect(() => {
    async function fetchPosts() {
      try {
        // Fetch data from JSONPlaceholder API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        // Check if response is unsuccessful
        if (!response.ok) {
          throw new Error("Data fetching failed");
        }

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        // Catch and handle any errors during fetch
        setError(error.message);
      }
    }

    // Call fetchPosts function
    fetchPosts();
  }, []);

  // Render UI based on unsucessful state
  if (error) {
    return <h1>Data fetching failed</h1>;
  }

  // Render posts if fetched successfully
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
