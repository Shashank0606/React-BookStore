import React, { useEffect, useState } from "react";
import book from "../../assests/book.png";
import {
  getAllBooks,
  highToLow,
  lowToHigh,
  newArrival,
  searchText,
} from "../../services/BookServices";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Books({ search }) {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState();
  const [pageInt, setpageInt] = useState({
    numberOfPages: 0,
    defaultPage: 1,
    NoitemperPage: 12,
    numberToLastBook: 12,
    lastPage: 1,
  });
  const [itemInpage, setItemInPage] = useState([]);
  const onChangePageInition = async (e, p) => {
    await setpageInt((prev) => ({
      ...prev,
      defaultPage: p,
    }));
    await setItemInPage(
      data.slice(
        p * pageInt.NoitemperPage - pageInt.NoitemperPage,
        p * pageInt.NoitemperPage,
      ),
    );
  };

  const fetchData = async () => {
    let response;
    if (search) {
      response = await searchText(search);
    } else if (sortOrder === "highToLow") {
      response = await highToLow();
    } else if (sortOrder === "lowToHigh") {
      response = await lowToHigh();
    } else if (sortOrder === "newArival") {
      response = await newArrival();
    } else {
      response = await getAllBooks();
    }
    let bookArr = response.data.data;
    setData(response.data.data);
    setpageInt((prev) => ({
      ...prev,
      numberOfPages: Math.ceil(bookArr.length / pageInt.NoitemperPage),
    }));
    setItemInPage(bookArr.slice(0, pageInt.NoitemperPage));
  };
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, [sortOrder, search]);

  return (
    <div>
      <div className="books">
        <div className="book-heading">
          <h2>Books</h2>
          <div className="sort">
            <select
              id="sort-select"
              value={sortOrder}
              onChange={handleSortChange}
              className={"sort-select"}
            >
              <option value="Sort by relevance">Sort by relevance</option>
              <option value="highToLow">High to Low</option>
              <option value="lowToHigh">Low to High</option>
              <option value="newArival">New Arival</option>
            </select>

            {/* <ul>
            {data.map((item) => (
              <li key={item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </li>
            ))}
          </ul> */}
          </div>
        </div>
        <div className="main-body">
          {itemInpage.map((book, index) => (
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
      <Stack style={{ marginLeft: "580px" }} spacing={2}>
        <Pagination
          onChange={onChangePageInition}
          count={pageInt.numberOfPages}
          defaultPage={pageInt.defaultPage}
        />
      </Stack>
    </div>
  );
}

export default Books;
