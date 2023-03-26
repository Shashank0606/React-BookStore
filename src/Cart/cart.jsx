import React, { useState, useEffect } from 'react';
import Header from '../components/header/header12';
import { getById } from "../services/BookServices";
import { useParams } from "react-router-dom";
import book from "../assests/book.png";



function Cart() {

    // const [book, setBooks] = useState([]);

    // const { id } = useParams();

    // useEffect(() => {
    //     getById(id)
    //         .then((res) => {
    //             setBooks(res.data.data);
    //             // setCounter(res.data.data.quantity);
    //             // setShowCounter(res.data.data.quantity ? true : false);
    //         })
    //         .catch((err) => console.error("error :", err));
    // }, []);

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const reduce = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    const [address, setAddress] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [state, setState] = useState("");

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleMobileNumberChange = (event) => {
        const regex = /^[0-9]{10}$/; // regex pattern to match 10 digit mobile number
        const { value } = event.target;
        if (regex.test(value)) {
            setMobileNumber(value);
        } else if (value === "") {
            setMobileNumber("");
        }
    };

    const handleStateChange = (event) => {
        const regex = /^[a-zA-Z\s]+$/; // regex pattern to match alphabets and spaces
        const { value } = event.target;
        if (regex.test(value)) {
            setState(value);
        } else if (value === "") {
            setState("");
        }
    };


    return (
        <div>
            <Header />
            <div className="top">
                <div className="headings">Home / </div>
                <div
                    className="headings"
                    style={{ color: "black", font: "small-caption", fontSize: "8px" }}
                >
                    {" "}
                    My Cart
                </div>
            </div>
            <div className="cart">
                <div className="cart-left">
                    <div className="my-cart"> My Cart</div>
                    <div className="cart-Book">
                        <img src={book} alt="img" />
                    </div>
                </div>
                <div className="cart-right">
                    <div className="cart-title">bookName </div>
                    <div className="cart-auther">by author</div>
                    <div className="cart-pricebook">
                        <div className="cart-dis-price">Rs. 500 </div>
                        <div className="cart-real-price">Rs. 1000</div>
                    </div>
                    <hr />
                    <div className="cart-book-counter">
                        <button onClick={increment}>+</button>
                        <div>{count}</div>
                        <button onClick={reduce}>-</button>
                        <button onClick={reset}>Reset</button>
                    </div>
                </div>
            </div>
            <div className="address">
                <div className="address-details">
                    <h3 className="form-heading">Customer Details</h3>
                    <div className="form-group">
                        <label htmlFor="full-name">Full Name</label>
                        <input type="text" className="form-control" id="full-name" />
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="mobile-number">Mobile Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="mobile-number"
                                    value={mobileNumber}
                                    onChange={handleMobileNumberChange}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="city-town">City/Town</label>
                                <input type="text" className="form-control" id="city-town" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea
                            className="form-control"
                            id="address"
                            rows="5"
                            placeholder="Enter your address"
                            value={address}
                            onChange={handleAddressChange}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            className="form-control"
                            id="state"
                            value={state}
                            onChange={handleStateChange}
                        />
                    </div>
                    <button className="continue-btn"

                        style={{
                            margin: "5px",
                            border: "1px solid #ac3b48",
                        }}

                    >Continue</button>
                </div>
            </div>
        </div >
    )
}

export default Cart