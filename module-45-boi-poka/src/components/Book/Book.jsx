import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, bookName, image, totalPages, category, tags } = book;
  return (
    <Link to={`/book-details/${bookId}`}>
      <div className="card bg-base-100 w-96 border-2 shadow-sm hover:cursor-pointer">
        <figure className="flex h-96 w-full items-center justify-center border-b-2">
          <img className="h-full py-12" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{totalPages}</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{tags.join(", ")}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
