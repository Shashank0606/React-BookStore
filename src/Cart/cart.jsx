import React, { useState, useEffect } from "react";
import Header from "../components/header/header12";
import { getById } from "../services/BookServices";
import { Link, useParams } from "react-router-dom";
import book from "../assests/book.png";
import {
  addedToCart,
  decreaseBookQuantity,
  getCart,
  removeFromCart,
} from "../services/CartServices";
import { Button } from "@mui/material";
import { getUserDetails, updateAddress } from "../services/UserServices";
import OrderSummary from "./OrderSummary";
import { TextField, TextareaAutosize } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import image1 from "../assests/book.png";

function Cart() {
  // let regName = /^[a-zA-Z]+([ ]+[a-zA-Z]+)+$/;
  // let phoneRegex = /^\+?[1-9]\d{9,12}$/;
  // let addressPattern = /^[a-zA-Z]+$/;
  const { id } = useParams();
  const [updateState, setUpdateState] = useState(false);
  const [fullName, setFullName] = useState("");
  const [town, setTown] = useState("");
  const [address, setAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [state, setState] = useState("");
  const [book, setBooks] = useState([]);

  const [regx, setRegx] = useState({
    FullnameError: false,
    PhoneError: false,
    AddressTypeError: false,
    AddressError: false,
    CityError: false,
    StateError: false,
    FullnameHelper: "",
    PhoneHelper: "",
    AddressTypeHelper: "",
    AddressHelper: "",
    stateHelper: "",
    cityHelper: "",
  });
  const [state1, setState1] = useState({
    bookDataInCart: [],
    realDta: [],
    condition: true,
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (book.length) {
      let tempTotal = 0;
      book.map((book) => {
        let totalPrice = 0;
        totalPrice = book.price * book.quantity;
        tempTotal = tempTotal + totalPrice;
      });
      setTotal(tempTotal);
    }
  }, [book]);

  const chnageState = () => {
    placeOrderClick(false);
    setState1((prev) => ({
      ...prev,
      condition: false,
    }));
  };

  const increment = (bookId) => {
    addedToCart(bookId)
      .then((res) => {
        setUpdateState(!updateState);
      })
      .catch((err) => {
        alert("Book not added to cart");
        console.error("error :", err);
      });
  };

  const reduce = (bookId) => {
    decreaseBookQuantity(bookId)
      .then((res) => {
        setUpdateState(!updateState);
      })
      .catch((err) => {
        alert("Book not removed from cart");
        console.error("error :", err);
      });
  };

  const reset = (bookId) => {
    removeFromCart(bookId)
      .then((res) => {
        setUpdateState(!updateState);
      })
      .catch((err) => {
        alert("Book not removed from cart");
        console.error("error :", err);
      });
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleTownChange = (event) => {
    setTown(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    // const regex = /^[0-9]{10}$/; // regex pattern to match 10 digit mobile number
    const { value } = event.target;
    setMobileNumber(value);
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

  const handleSubmit = () => {
    // let nametest = regName.test(addObj.name);
    // if (!nametest) {
    //   setRegx((prev) => ({
    //     ...prev,
    //     FullnameError: true,
    //     FullnameHelper: "Enter valid name",
    //   }));
    // } else {
    //   setRegx((prev) => ({
    //     ...prev,
    //     FullnameError: false,
    //     FullnameHelper: "",
    //   }));
    // }

    // let phoneTest = phoneRegex.test(addObj.phoneNumber);
    // if (!phoneTest) {
    //   setRegx((prev) => ({
    //     ...prev,
    //     PhoneError: true,
    //     PhoneHelper: "Enter valid phonenumber",
    //   }));
    // } else {
    //   setRegx((prev) => ({
    //     ...prev,
    //     PhoneError: false,
    //     PhoneHelper: "",
    //   }));
    // }

    // let AddressTypeTest = addressPattern.test(addObj.addressType);
    // if (!AddressTypeTest) {
    //   setRegx((prev) => ({
    //     ...prev,
    //     AddressTypeError: true,
    //     AddressTypeHelper: "Enter valid value",
    //   }));
    // } else {
    //   setRegx((prev) => ({
    //     ...prev,
    //     AddressTypeError: false,
    //     AddressTypeHelper: "",
    //   }));
    // }

    // let AddressTest = regName.test(addObj.fullAddress);
    // if (!AddressTest) {
    //   setRegx((prev) => ({
    //     ...prev,
    //     AddressError: true,
    //     AddressHelper: "Enter valid address",
    //   }));
    // } else {
    //   setRegx((prev) => ({
    //     ...prev,
    //     AddressError: false,
    //     AddressHelper: "",
    //   }));
    // }
    // let stateTest = addressPattern.test(addObj.state);
    // if (!stateTest) {
    //   setRegx((prev) => ({
    //     ...prev,
    //     StateError: true,
    //     stateHelper: "Enter valid state",
    //   }));
    // } else {
    //   setRegx((prev) => ({
    //     ...prev,
    //     StateError: false,
    //     stateHelper: "",
    //   }));
    // }

    // let cityTest = addressPattern.test(addObj.city);
    // if (!cityTest) {
    //   setRegx((prev) => ({
    //     ...prev,
    //     CityError: true,
    //     cityHelper: "Enter valid city",
    //   }));
    // }
    let apiObj = {
      fullName: fullName,
      mobile: mobileNumber,
      address: address,
      town: town,
      state: state,
      cartId: id,
    };
    updateAddress(apiObj)
      .then((res) => {
        alert("Address Updated");
      })
      .catch((err) => console.error("error :", err));
  };

  useEffect(() => {
    getCart()
      .then((res) => {
        setBooks(res.data.data.books);
      })
      .catch((err) => console.error("error :", err));
    getUserDetails()
      .then((res) => {
        let addressArr = res.data.data.addresses;
        if (addressArr.length) {
          setAddress(addressArr[0].address);
          setFullName(addressArr[0].fullName);
          setMobileNumber(addressArr[0].mobile);
          setTown(addressArr[0].town);
          setState(addressArr[0].state);
        }
      })
      .catch((err) => {
        console.error("error :", err);
      });
  }, [updateState]);

  const placeOrderClick = (value) => {
    setState1((prev) => ({
      ...prev,
      AddressDeatilsVal: value,
      AddressSetUpsVal: !value,
    }));
  };

  const clickOnContinue = (value) => {
    handleSubmit();
    setState1((prev) => ({
      ...prev,
      orderSum: value,
      OrderSumUnit: !value,
    }));
  };

  return (
    <div className="cartMainBox">
      <div className="cartHeadNames">
        <div className="headings"> Home / </div>
        <div
          className="headings"
          style={{ color: "black", font: "small-caption", fontSize: "11px" }}
        >
          {" "}
          My Cart
        </div>
      </div>
      {/* <Header /> */}
      <div className="mainMyCArtt">
        {/* headings */}
        <div className="HeadingOfMyCartog">
          <div className="MycartLeftHeading">My Cart(1)</div>
          <div
            className="MycartLeftHeading"
            style={{ marginRight: "0px", width: "275px", height: "40px" }}
          >
            <div className="locationMyCart">
              <div>
                {" "}
                <PinDropIcon
                  sx={{
                    marginLeft: "10px",
                    color: "#A03037",
                    marginTop: "9px",
                  }}
                />{" "}
              </div>
              <div
                style={{
                  marginTop: "12px",
                  marginLeft: "3px",
                  fontSize: "14px",
                }}
              >
                Use current location
              </div>
            </div>
          </div>
        </div>
        {/* headings */}
        <div className="bookSectionOfmyCart">
          {book.map((item) => (
            <div className="booksArrayMyArt">
              <div className="imgInMyCartOfBook">
                <img src={image1} height={"85px"} width={"60px"}></img>
              </div>
              <div className="bookrightcontntmtcrt">
                <div className="titleMybookcrt">{item.bookName}</div>
                <div
                  className="author"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "25px",
                    marginLeft: "auto",
                  }}
                >
                  by {item.author}{" "}
                </div>

                <div className="price111cart">RS {item.price}</div>
                <div className="buttonOperationsMycrt">
                  {console.log("eeeexxxx", item)}
                  <RemoveCircleOutlineIcon
                    onClick={() => reduce(item.productId, item)}
                    sx={{ height: "24px" }}
                  />
                  <div className="counterFormycrtt">{item.quantity}</div>
                  <AddCircleOutlineIcon
                    onClick={() => increment(item.productId, item)}
                    sx={{ height: "24px" }}
                  />
                  <Button
                    onClick={() => {
                      reset(item.productId, item);
                    }}
                    variant={"text"}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <div className="butnnsLasplcor">
            {state1.condition && (
              <Button
                onClick={() => {
                  chnageState();
                }}
                className="butnplceOrder"
                size="small"
                variant="contained"
              >
                PLACE ORDER
              </Button>
            )}
          </div>
        </div>
      </div>
      {state1.AddressDeatilsVal && (
        <div className="adbokDeatils">
          <div style={{ marginLeft: "40px" }}>Address Details</div>
        </div>
      )}
      {state1.AddressSetUpsVal && (
        <div className="addrsetUpgg">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div> Customer Details</div>
            <div className="tittleBAr">Add new Address</div>
          </div>

          <div className="fulNAameaddress">
            <TextField
              id="outlined-basic"
              onChange={handleFullNameChange}
              value={fullName}
              sx={{ width: "48%", height: "80px" }}
              label="FullName"
              variant="outlined"
              error={regx.FullnameError}
              helperText={regx.FullnameHelper}
              size="small"
            />
            <TextField
              id="outlined-basic"
              onChange={handleMobileNumberChange}
              value={mobileNumber}
              sx={{ width: "48%", height: 10 }}
              label="PhoneNumber"
              variant="outlined"
              error={regx.PhoneError}
              helperText={regx.PhoneHelper}
              size="small"
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <TextField
              id="outlined-basic"
              onChange={handleAddressChange}
              value={address}
              sx={{ width: "100%", marginLeft: "0px" }}
              label="Address"
              error={regx.AddressError}
              helperText={regx.AddressHelper}
              variant="outlined"
              multiline
              rows={2}
              size="small"
            />
          </div>
          <div
            className="fulNAameaddress"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <TextField
              id="outlined-basic"
              onChange={handleTownChange}
              value={town}
              sx={{ width: "48%", height: 10 }}
              error={regx.CityError}
              helperText={regx.cityHelper}
              label="City"
              variant="outlined"
              size="small"
            />
            <TextField
              id="outlined-basic"
              onChange={handleStateChange}
              value={state}
              sx={{ width: "48%", height: 10 }}
              error={regx.StateError}
              helperText={regx.stateHelper}
              label="State"
              variant="outlined"
              size="small"
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "20px",
              marginBottom: "10px",
            }}
          >
            <Button onClick={() => clickOnContinue(false)} variant="contained">
              Continue
            </Button>
          </div>
        </div>
      )}
      {state1.orderSum && (
        <div className="adbokDeatils">
          <div style={{ marginLeft: "40px" }}>Order summary</div>
        </div>
      )}
      {state1.OrderSumUnit && (
        <div className="mainMyCArtt">
          {/* headings */}
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
            <div
              className="MycartLeftHeading"
              style={{
                marginRight: "0px",
                width: "275px",
                height: "40px",
                fontWeight: "600",
              }}
            >
              {/* <div className='locationMyCart'>
              <div>  <PinDropIcon sx={{ marginLeft: '10px', color: '#A03037', marginTop: '9px' }} /> </div>
              <div style={{ marginTop: '12px', marginLeft: '3px', fontSize: '14px' }}>Use current location</div>
            </div> */}
            </div>
          </div>
          {/* headings */}
          <div className="bookSectionOfmyCart">
            {book.map((x) => (
              <div className="booksArrayMyArt">
                <div className="imgInMyCartOfBook">
                  <img src={image1} height={"85px"} width={"60px"}></img>
                </div>
                <div className="bookrightcontntmtcrt">
                  <div className="titleMybookcrt">{x.bookName}</div>
                  <div
                    className="author"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      height: "25px",
                      marginLeft: "auto",
                    }}
                  >
                    by {x.author}{" "}
                  </div>

                  <div className="price111cart">RS {x.price}</div>
                  <div className="counterFormycrtt">{x.quantity}</div>
                </div>
              </div>
            ))}
            Total Cart Price Rs: {total}
            <div className="butnnsLasplcor">
              {/* {state1.condition && ( */}
              <Button
                onClick={() => {
                  chnageState();
                }}
                className="butnplceOrder"
                size="small"
                variant="contained"
              >
                <Link to={"/checkoutpage"}>Checkout</Link>
              </Button>
              {/* )} */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
