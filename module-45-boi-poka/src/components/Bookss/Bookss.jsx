import React from "react";
import { useLoaderData } from "react-router";
import Book from "../Book/Book";

const Bookss = () => {
  const BookData = useLoaderData();
  return (
    <div className="flex w-full flex-wrap justify-between">
      {BookData.map((book) => (
        <Book key={book.bookId} book={book}></Book>
      ))}
    </div>
  );
};

export default Bookss;
