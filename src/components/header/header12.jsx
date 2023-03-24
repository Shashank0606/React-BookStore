import React from "react";
import educationimg from "../../assests/education.png";
// import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <div className="left">
        <img src={educationimg} alt="education" className="left-img" />
        <div className="">Bookstore</div>
      </div>
      <div className="search">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 700,
          }}
        >
          <IconButton type="button" aria-label="search">
            {/* <SearchIcon /> */}
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
      </div>
      <div className="right">
        <div className="profile">
          {/* <PermIdentityIcon /> */}
          <p>Profile</p>
        </div>
        <div className="profile">
          {/* <ShoppingCartIcon /> */}
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
}
export default Header;
