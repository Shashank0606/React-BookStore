import React, { useEffect, useState } from "react";
import book from "../../assests/book.png";
import { getAllBooks } from "../../services/BookServices";

import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getAllBooks()
      .then((res) => {
        console.log("ressss", res);
        setBooks(res.data.data);
      })
      .catch((err) => console.error("error :", err));
  }, []);

  return (
    <div className="books">
      <div className="book-heading">
        <h2>Books</h2>
        <span>sort</span>
      </div>
      <div className="main-body">
        {books.map((book, index) => (
          <div className="card" key={index}>
            <Link to={`/bookpar/${book._id}`}>
              <div className="book-image">
                <img src={book.bookImage} alt="book" />
              </div>
              <div className="bottom-card">
                <h4 className="book-name">{book.bookName}</h4>
                <div className="author">by {book.author}</div>
                <div className="book-price">
                  Rs. {book.discountPrice}{" "}
                  <span className="actual-price">Rs. {book.price}</span>{" "}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
