"use client";

import Link from "next/link";

const SingleCard = ({ post }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>

          <div className="card-actions justify-end">
            <Link href={`/post/${post.id}`} className="btn btn-primary">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
