import React from "react";
import shopingImg from "../assests/shoping.png";
import TextField from "@mui/material/TextField";
import { Box, Button, IconButton } from "@mui/material";
import { emailIdRegex, passwordRegex } from "../constants";
import { useState } from "react";
import { loginUser } from "../services/UserServices";

const Login = () => {
  const [signinRegex, setSigninRegex] = useState({
    emailError: false,
    emailHelper: "",
    passwordError: false,
    passwordHelper: "",
  });
  const [signUpObj, setSignUpObj] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    let usernameError = emailIdRegex.test(signUpObj.email);
    let passwordError = passwordRegex.test(signUpObj.password);

    console.log("sindfjj", usernameError, signUpObj);
    if (!signUpObj.email) {
      setSigninRegex((prevState) => ({
        ...prevState,
        emailError: true,
        emailHelper: "Email is required",
      }));
    } else if (!usernameError) {
      setSigninRegex((prevState) => ({
        ...prevState,
        emailError: true,
        emailHelper: "Email is invalid",
      }));
    } else {
      setSigninRegex((prevState) => ({
        ...prevState,
        emailError: false,
        emailHelper: "",
      }));
    }

    if (!signUpObj.password) {
      setSigninRegex((prevState) => ({
        ...prevState,
        passwordError: true,
        passwordHelper: "Password is required",
      }));
    } else if (!passwordError) {
      setSigninRegex((prevState) => ({
        ...prevState,
        passwordError: true,
        passwordHelper: "Password is invalid",
      }));
    } else {
      setSigninRegex((prevState) => ({
        ...prevState,
        passwordError: false,
        passwordHelper: "",
      }));
    }
    return true;
  };

  const handleEmail = (e) => {
    setSignUpObj((prevState) => ({ ...prevState, email: e.target.value }));
  };

  const handlePassword = (e) => {
    setSignUpObj((prevState) => ({ ...prevState, password: e.target.value }));
  };

  const handleSubmit = (e) => {
    const isValid = validate();
    if (isValid) {
      loginUser(signUpObj)
        .then((res) => {
          console.log("login Success", res.data);
          alert("Login Success");
        })
        .catch((err) => console.error("err :", err));
    }
  };

  return (
    <div className="login-form">
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
              // onClick={() => clickSignup()}
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
              error={signinRegex.emailError}
              helperText={signinRegex.emailHelper}
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
              error={signinRegex.passwordError}
              helperText={signinRegex.passwordHelper}
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
              onClick={handleSubmit}
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
                Login
              </h3>
            </Button>
          </Box>
          <div className="or">OR</div>
          <Box className="extra-button">
            <Button
              variant="contained"
              style={{
                width: "120px",
                height: "37px",
                background: "#4266b2 0% 0% no-repeat padding-box",
                ErrorRadius: "3px",
                opacity: "1",
                marginTop: "10px",
              }}
              // onClick={submit}
            >
              <h3
                style={{
                  width: "22px",
                  height: "18px",
                  position: "relative",
                  right: "27px",
                  font: "normal normal bold 14px/18px Meiryo UI",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  opacity: "1",
                }}
              >
                Facebook
              </h3>
            </Button>
            <Button
              variant="contained"
              style={{
                width: "120px",
                height: "37px",
                background: "#f5f5f5 0% 0% no-repeat padding-box",
                ErrorRadius: "3px",
                opacity: "1",
                marginTop: "10px",
              }}
              // onClick={submit}
            >
              <h3
                style={{
                  width: "22px",
                  height: "18px",
                  position: "relative",
                  right: "27px",
                  font: "normal normal bold 14px/18px Meiryo UI",
                  letterSpacing: "0px",
                  color: "#6c6767",
                  textTransform: "uppercase",
                  opacity: "1",
                }}
              >
                Google
              </h3>
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Login;
