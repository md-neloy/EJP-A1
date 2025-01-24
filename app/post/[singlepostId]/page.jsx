"use client";

import { use, useEffect, useState } from "react";

const PostDetails = ({ params }) => {
  const { singlepostId } = use(params);
  const [data, setData] = useState("");
  console.log(params);
  useEffect(() => {
    fetch(` https://jsonplaceholder.typicode.com/posts/${singlepostId}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="card card-compact bg-base-100 w-full shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
