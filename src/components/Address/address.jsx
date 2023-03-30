import { ImportExportOutlined } from "@mui/icons-material";
import React, { useState } from "react";
// import './AddressSetUp.css'
import { TextField, TextareaAutosize } from "@mui/material";
import Button from "@mui/material/Button";
// import { addAddress } from '../../services/address.service';
// import { updateAddress } from '../../services/CartServices';
import { display } from "@mui/system";

function AddressSetup(props) {
  const [addresses, setAddresss] = useState([]);
  const [visible, setVisible] = useState(true);
  const [addObj, setAddObj] = useState({
    name: "",
    phoneNumber: "",
    addressType: "",
    fullAddress: "",
    city: "",
    state: "",
  });
  // const [addObj, setAddObj] = useState({
  //     name: '', phoneNumber: '', addressType: '', fullAddress: '', city: '', state: ''
  // })
  const takeFullName = (event) => {
    setAddObj((prev) => ({
      ...prev,
      name: event.target.value,
    }));
    console.log(addObj.name);
  };
  // const checkBoxFun = (id) => {
  //     document.getElementById(id)
  // }
  const takePhoneNumber = (event) => {
    setAddObj((prev) => ({
      ...prev,
      phoneNumber: event.target.value,
    }));
    console.log(addObj.phoneNumber);
  };

  const addressType = (event) => {
    setAddObj((prev) => ({
      ...prev,
      addressType: event.target.value,
    }));
    console.log(addObj.addressType);
  };
  const address = (event) => {
    setAddObj((prev) => ({
      ...prev,
      fullAddress: event.target.value,
    }));
    console.log(addObj.fullAddress);
  };

  const continueClick = async () => {
    console.log(addObj);
    setAddresss({ addObj });
    console.log(addresses);
    setVisible(false);
    //  setAddresss(addObj)
    props.clickOnContinue(false);
    // const respone = await updateAddress(addresses)
    // console.log(respone);
  };

  const city = (event) => {
    setAddObj((prev) => ({
      ...prev,
      city: event.target.value,
    }));
    console.log(addObj.city);
  };
  const state = (event) => {
    setAddObj((prev) => ({
      ...prev,
      state: event.target.value,
    }));
    console.log(addObj.state);
    setAddresss([addObj]);
  };

  return (
    <>
      <div className="addrsetUpgg">
        <div style={{ display: "flex" }}>
          <div style={{ margin: "10px", marginLeft: "40px" }}>
            {" "}
            Customer Details
          </div>
          <div className="tittleBAr">Add new Address</div>
        </div>

        <div className="fulNAameaddress">
          <TextField
            id="outlined-basic"
            onChange={takeFullName}
            sx={{ width: 250, height: "80px" }}
            label="FullName"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            onChange={takePhoneNumber}
            sx={{ width: 250, height: 10 }}
            label="PhoneNumber"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="addTypeAdd">
          <div
            style={{
              marginLeft: "37px",
              display: "flex",
              alignItems: "center",
              marginTop: "8px",
            }}
          >
            Address Type :{" "}
          </div>
          <div>
            {" "}
            <TextField
              id="outlined-basic"
              onChange={addressType}
              sx={{ width: 100, height: 10 }}
              label=""
              variant="outlined"
              size="small"
            />
          </div>
          {/* <div> <input id='chkcbx2' type={'checkbox'} />Work</div> */}
        </div>
        <div style={{ marginLeft: "59px", marginTop: "10px" }}>
          <div style={{ marginBottom: "10px" }}>Address</div>
          <TextField
            id="outlined-basic"
            onChange={address}
            sx={{ width: 570, marginLeft: "0px" }}
            label="Address"
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
            onChange={city}
            sx={{ width: 200, height: 10 }}
            label="City"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            onChange={state}
            sx={{ width: 200, height: 10 }}
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
          {visible && (
            <Button onClick={continueClick} variant="contained">
              Continue
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default AddressSetup;
