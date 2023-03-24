import React from "react";
import "./signup.css";
import { Box, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import shopingImg from "../assests/shoping.png";
import { registerUser } from "../services/UserServices";
import { client } from "../services/axios";
import { API_ROUTE } from "../services/config";
import { emailIdRegex, fullNameRegex, passwordRegex } from "../constants";

function Signup1(props) {
  const [signUpObj, setSignUpObj] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [signupRegex, setsignUpRegex] = React.useState({
    firstnameError: false,
    firstnameHelper: "",
    lastnameError: false,
    lastnameHelper: "",
    emailError: false,
    emailHelper: "",
    passwordError: false,
    passwordHelper: "",
  });

  const handlefirstname = (event) => {
    setSignUpObj((prevState) => ({
      ...prevState,
      firstname: event.target.value,
    }));
  };
  const handleEmail = (event) => {
    setSignUpObj((prevState) => ({ ...prevState, email: event.target.value }));
  };
  const handlePassword = (event) => {
    setSignUpObj((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  };
  const handlelastname = (event) => {
    setSignUpObj((prevState) => ({
      ...prevState,
      lastname: event.target.value,
    }));
  };

  const submit = () => {
    let firstnameTest = fullNameRegex.test(signUpObj.firstname);
    let lastnameTest = fullNameRegex.test(signUpObj.lastname);
    let userNameTest = emailIdRegex.test(signUpObj.email);
    let passwordTest = passwordRegex.test(signUpObj.password);

    if (firstnameTest === true) {
      setsignUpRegex((prevState) => ({
        ...prevState,
        firstnameError: false,
        firstnameHelper: "",
      }));
    } else if (firstnameTest === false) {
      setsignUpRegex((prevState) => ({
        ...prevState,
        firstnameError: true,
        firstnameHelper: "Enter Valid First Name",
      }));
    }

    if (userNameTest === true) {
      setsignUpRegex((prevState) => ({
        ...prevState,
        emailError: false,
        emailHelper: "",
      }));
    } else if (userNameTest === false) {
      setsignUpRegex((prevState) => ({
        ...prevState,
        emailError: true,
        emailHelper: "Enter Valid e-mail Id",
      }));
    }

    if (passwordTest === true) {
      setsignUpRegex((prevState) => ({
        ...prevState,
        passwordError: false,
        passwordHelper: "",
      }));
    } else if (passwordTest === false) {
      setsignUpRegex((prevState) => ({
        ...prevState,
        passwordError: true,
        passwordHelper: "Enter Valid password",
      }));
    }
    if (lastnameTest === true) {
      setsignUpRegex((prevState) => ({
        ...prevState,
        lastnameError: false,
        lastnameHelper: "",
      }));
    } else if (lastnameTest === false) {
      setsignUpRegex((prevState) => ({
        ...prevState,
        lastnameError: true,
        lastnameHelper: "Enter Valid Last Name",
      }));
    }
    console.log("qowier");
    if (!firstnameTest || !userNameTest || !passwordTest || !lastnameTest) {
      return;
    } else {
      registerUser({
        ...signUpObj,
      })
        .then((res) => {
          alert("User Register Success");
          console.log("response", res.data);
        })
        .catch((err) => console.error("error :", err));
    }
  };

  const clickSignup = () => {
    props.listenToSignUpPage();
  };
  return (
    <div className="signup-form">
      <div className="main-container">
        <div className="left-box">
          <img src={shopingImg} alt="shoping" className="left-box-img" />
          <span className="left-box-text">Online Book Shopping</span>
        </div>
        <div className="right-box">
          <div className="pageSwitch">
            <IconButton
              style={{
                color: "#878787",
                width: "72px",
                height: "33px",
                textAlign: "left",
                font: "normal normal medium 25px/33px Roboto",
                letterSpacing: "0px",
                textTransform: "uppercase",
                opacity: "1",
              }}
              onClick={() => clickSignup()}
            >
              login
            </IconButton>
            <IconButton
              style={{
                width: "89px",
                height: "33px",
                textAlign: "left",
                font: "normal normal medium 25px/33px Roboto",
                letterSpacing: "0px",
                color: "#0A0102",
                textTransform: "uppercase",
                opacity: "1",
              }}
            >
              signup
            </IconButton>
          </div>
          <Box className="textFullName">
            <h3
              style={{
                width: "45px",
                height: "13px",
                font: "normal normal normal 10px/13px Roboto",
                letterSpacing: "0px",
                color: "#0A0102",
                textTransform: "capitalize",
                opacity: "1",
                position: "relative",
                bottom: "10px",
              }}
            >
              First name
            </h3>

            <TextField
              style={{
                width: "252px",
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                Error: "1px solid #E2E2E2",
                ErrorRadius: "2px",
                opacity: "1",
                position: "relative",
                bottom: "20px",
              }}
              onChange={handlefirstname}
              size="small"
              error={signupRegex.firstnameError}
              helperText={signupRegex.firstnameHelper}
            />
          </Box>
          <Box className="textMobile">
            <h3
              style={{
                width: "45px",
                height: "13px",
                font: "normal normal normal 10px/13px Roboto",
                letterSpacing: "0px",
                color: "#0A0102",
                textTransform: "capitalize",
                opacity: "1",
                position: "relative",
                bottom: "10px",
              }}
            >
              Last name
            </h3>

            <TextField
              style={{
                width: "252px",
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                Error: "1px solid #E2E2E2",
                ErrorRadius: "2px",
                opacity: "1",
                position: "relative",
                bottom: "20px",
              }}
              onChange={handlelastname}
              size="small"
              error={signupRegex.lastnameError}
              helperText={signupRegex.lastnameHelper}
            />
          </Box>
          <Box className="textEmailId">
            <h3
              style={{
                width: "36px",
                height: "13px",
                font: "normal normal normal 10px/13px Roboto",
                letterSpacing: "0px",
                color: "#0A0102",
                textTransform: "capitalize",
                opacity: "1",
                position: "relative",
                bottom: "10px",
              }}
            >
              email id
            </h3>
            <TextField
              style={{
                width: "252px",
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                Error: "1px solid #E2E2E2",
                ErrorRadius: "2px",
                opacity: "1",
                position: "relative",
                bottom: "20px",
              }}
              onChange={handleEmail}
              size="small"
              error={signupRegex.emailError}
              helperText={signupRegex.emailHelper}
            />
          </Box>
          <Box className="textPasswordd">
            <h3
              style={{
                width: "44px",
                height: "13px",
                font: "normal normal normal 10px/13px Roboto",
                letterSpacing: "0px",
                color: "#0A0102",
                textTransform: "capitalize",
                opacity: "1",
                position: "relative",
                bottom: "10px",
              }}
            >
              password
            </h3>
            <TextField
              style={{
                width: "252px",
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                Error: "1px solid #E2E2E2",
                ErrorRadius: "2px",
                opacity: "1",
                position: "relative",
                bottom: "20px",
              }}
              onChange={handlePassword}
              size="small"
              error={signupRegex.passwordError}
              helperText={signupRegex.passwordHelper}
            />
          </Box>
          <Box className="signUpButton">
            <Button
              variant="contained"
              style={{
                width: "252px",
                height: "37px",
                background: "#A03037 0% 0% no-repeat padding-box",
                ErrorRadius: "3px",
                opacity: "1",
                marginTop: "10px",
              }}
              onClick={submit}
            >
              <h3
                style={{
                  width: "22px",
                  height: "18px",
                  position: "relative",
                  right: "17px",
                  font: "normal normal bold 14px/18px Meiryo UI",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  opacity: "1",
                }}
              >
                Signup
              </h3>
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Signup1;
