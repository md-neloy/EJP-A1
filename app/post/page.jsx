"use client";
import { useEffect, useState } from "react";
import SingleCard from "../component/SingleCard";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts
`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {posts.map((post) => (
        <SingleCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
