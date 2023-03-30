import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function OrderSummary({ books = [] }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (books.length) {
      let tempTotal = 0;
      books.map((book) => {
        let totalPrice = 0;
        totalPrice = book.price * book.quantity;
        tempTotal = tempTotal + totalPrice;
      });
      setTotal(tempTotal);
    }
  }, [books]);

  return (
    <>
      <div className="mainMyCArtt">
        <div className="HeadingOfMyCartog">
          <div
            className="MycartLeftHeading"
            style={{
              width: "146px",
              fontWeight: "600",
              fontSize: "20px",
              marginRight: "60px",
            }}
          >
            Order Summary
          </div>
        </div>
        <div>RS {total}</div>
        <div className="bookSectionOfmyCart">
          <div className="butnnsLasplcor">
            <Button className="butnplceOrder" size="small" variant="contained">
              <Link to="/checkoutpage">Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderSummary;
