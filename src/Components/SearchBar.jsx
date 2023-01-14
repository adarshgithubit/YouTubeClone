import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <>
      <Paper
        component="form"
        onSubmit={() => {}}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 3,
          boxShadow: "none",
          mr: { sm: 5 },
        }}
      >
        <input
          style={{ border: "none" }}
          className="search-bar"
          type="text"
          placeholder="search......."
          value=""
          onChange={() => {}}
        />
        <IconButton
          type="submit"
          sx={{
            p: "10px",
            color: "red",
          }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;
