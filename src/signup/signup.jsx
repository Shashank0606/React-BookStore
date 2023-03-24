import React, { useReducer } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const fullNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailIdRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const passwordRegex = /^[A-Za-z]\w{3,14}$/;
const phoneNumberRegex = /^[6-9]{1}[0-9]{9}$/;

const initialSignUpState = {
    fullName: "",
    email: "",
    password: "",
    phone: "",
};

const initialSignUpRegexState = {
    fullNameError: false,
    fullNameHelper: "",
    emailError: false,
    emailHelper: "",
    passwordError: false,
    passwordHelper: "",
    phoneError: false,
    phoneHelper: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_FULL_NAME":
            return { ...state, fullName: action.payload };
        case "SET_EMAIL":
            return { ...state, email: action.payload };
        case "SET_PASSWORD":
            return { ...state, password: action.payload };
        case "SET_PHONE":
            return { ...state, phone: action.payload };
        case "SET_FULL_NAME_ERROR":
            return { ...state, fullNameError: action.payload };
        case "SET_FULL_NAME_HELPER":
            return { ...state, fullNameHelper: action.payload };
        case "SET_EMAIL_ERROR":
            return { ...state, emailError: action.payload };
        case "SET_EMAIL_HELPER":
            return { ...state, emailHelper: action.payload };
        case "SET_PASSWORD_ERROR":
            return { ...state, passwordError: action.payload };
        case "SET_PASSWORD_HELPER":
            return { ...state, passwordHelper: action.payload };
        case "SET_PHONE_ERROR":
            return { ...state, phoneError: action.payload };
        case "SET_PHONE_HELPER":
            return { ...state, phoneHelper: action.payload };
        default:
            return state;
    }
};

const InputContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(2),
}));

const FormContainer = styled("form")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(4),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#4CAF50",
    "&:hover": {
        backgroundColor: "#388E3C",
    },
}));

function Signup(props) {
    const [state, dispatch] = useReducer(reducer, initialSignUpState);
    const [signupRegex, setsignUpRegex] = useReducer(
        reducer,
        initialSignUpRegexState
    );

    const takeFullName = (event) => {
        dispatch({ type: "SET_FULL_NAME", payload: event.target.value });
    };
    const takeUserName = (event) => {
        dispatch({ type: "SET_EMAIL", payload: event.target.value });
    };
    const takePassword = (event) => {
        dispatch({ type: "SET_PASSWORD", payload: event.target.value });
    };
    const takePhone = (event) => {
        dispatch({ type: "SET_PHONE", payload: event.target.value });
    };

    const submit = () => {
        let fullNameTest = fullNameRegex.test(state.fullName);

        // default:
        return state;
    }
};

const handleUsernameChange = (event) => {
    dispatch({ type: "SET_USERNAME", payload: event.target.value });
};

const handlePasswordChange = (event) => {
    dispatch({ type: "SET_PASSWORD", payload: event.target.value });
};

const handleSignIn = () => {
    let usernameError = "";
    let passwordError = "";


    if (!state.username) {
        usernameError = "Username is required";
    }

    if (!state.password) {
        passwordError = "Password is required";
    }

    if (usernameError || passwordError) {
        dispatch({ type: "SET_USERNAME_ERROR", payload: usernameError });
        dispatch({ type: "SET_PASSWORD_ERROR", payload: passwordError });
    } else {
        // Handle sign in logic
        console.log("Username:", state.username);
        console.log("Password:", state.password);
    }


    return (
        <div className="signin-container">
            <div className="signin-image-container">
                <img src={shopingImg} alt="Shopping" className="signin-image" />
            </div>
            <div className="signin-form-container">
                <h1 className="signin-heading">Sign In</h1>
                <form className="signin-form" noValidate autoComplete="off">
                    <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        className="signin-textfield"
                        onChange={handleUsernameChange}
                        error={state.usernameError ? true : false}
                        helperText={state.usernameError}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        className="signin-textfield"
                        onChange={handlePasswordChange}
                        error={state.passwordError ? true : false}
                        helperText={state.passwordError}
                    />
                    <div className="signin-button-container">
                        <Button variant="contained" onClick={handleSignIn} className="signin-button">
                            Sign In
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default Signin;