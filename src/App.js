import logo from "./logo.svg";
import "./App.css";
import "./signin/signin.css";
import "./signup/signup.css";
import "./components/Books/books.css";
import Signup1 from "./signup/signup1";
import Login from "./signin/signin";
import "./components/header/header.css";
import Dashboard from "./dashboard/Dashboard";
import Bookpar from "./Bookpar/bookpar";
import "./Bookpar/bookpar.css";
import { Switch, Route, Routes } from "react-router-dom";
// import Books from "./components/Books";

function App() {
  return (
    <div className="App">
      {/* <Signup1 /> */}
      {/* <Login /> */}
      {/* <Dashboard /> */}
      {/* <Bookpar /> */}

      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/bookpar/:id" element={<Bookpar />} />
      </Routes>
    </div>
  );
}

export default App;
