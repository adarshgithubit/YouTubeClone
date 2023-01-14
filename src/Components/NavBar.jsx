import React from "react";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
// import { logo } from '../Utils/Constant'

const NavBar = () => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: "sticky",
          background: "#000",
          justifyContent: "space-between",
          top: "0",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItem: "centre" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
            height={35}
            alt="none"
          />
        </Link>
        <SearchBar/>
      </Stack>
      
      
    </>
  );
};

export default NavBar;
