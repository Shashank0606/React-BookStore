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
import Cart from "./Cart/cart";
import "./Cart/cart.css";
import Mycart from "./Cart/maincart";
import CartBook from "./components/CartBook/cartBook";
import Books from "./components/Books/Books";
import "./components/Address/address.css";
import Checkout from "./components/checkout/Checkout";

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
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkoutpage" element={<Checkout />} />
      </Routes>

      {/* <Cart /> */}
      {/* <Mycart /> */}
      {/* <CartBook /> */}
      {/* <Mycart /> */}
    </div>
  );
}

export default App;
