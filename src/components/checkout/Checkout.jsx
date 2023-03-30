import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PlacedImg from "../../assests/Orderplacedsuccessfully.png";
import "./Checkout.css"

function Checkout() {
  return (
    <div className="main-placed">
      <img src={PlacedImg} alt="placed-Img" />
      <div>
        Hurray!! Your Order is confirmed <br></br> the order id is #123456 save the order for <br></br>further communication..
        <div className="shopping">
          <Button size="small" variant="contained">
            <Link to={"/"}>Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
