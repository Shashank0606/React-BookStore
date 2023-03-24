import React, { useState, useEffect } from "react";
import { getById, addedToCart } from "../services/BookServices";
import book from "../assests/book.png";
import Header from "../components/header/header12";
import { IconButton, Button } from "@mui/material";
import { useParams } from "react-router-dom";

function Bookpar() {
  const [book, setBooks] = useState([]);
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    getById(id)
      .then((res) => {
        console.log("ressss", res);
        setBooks(res.data.data);
      })
      .catch((err) => console.error("error :", err));
  }, []);


  const [counter, setCounter] = useState(0);

  const handleAddToBag = () => {
    // setCounter(counter + 1);
    // useEffect(() => {
    //   addedToCart(id)
    //     .then((res) => {
    //       console.log("ressss", res);
    //       setBooks(res.data.data);
    //     })
    //     .catch((err) => console.error("error :", err));
    // }, []);

  };
  return (
    <div>
      <Header />
      <div className="top">
        <div className='headings'>Home / </div>
        <div className='headings' style={{ color: 'black', font: 'small-caption', fontSize: '8px' }}> Book(01)</div>

      </div>
      {/* {books.map((book, index) => ( */}
      <div className="main-bookcontainer">

        <div className="left-side">
          <div className="img-Book">
            <img
              src={book.bookImage}
              alt="img"
              style={{ height: "250px", width: "250px" }}
            />
          </div>
          <div className="book-button">

            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{ margin: "5px" }}
              onClick={handleAddToBag}
            >
              ADD TO BAG ({counter})
            </Button>
            <IconButton
              className="wishlist"
              style={{
                margin: "5px",
                color: "#ffff",
                border: "1px solid #ac3b48",
              }}
            >
              WISHLIST
            </IconButton>
          </div>
        </div>
        <div className="right-content">
          <div className="title">{book.bookName} </div>
          <div className="auther">by {book.author}</div>
          <div className="pricebook">
            <div className="dis-price">Rs. {book.discountPrice} </div>
            <div className="real-price">Rs. {book.price}</div>
          </div>
          <div className="book-description">
            <div className="detail">Book Detail</div>
            <div className="descrip"> {book.description}</div>
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}

export default Bookpar;
