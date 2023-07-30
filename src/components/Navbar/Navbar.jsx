import React, { useEffect, useState } from "react";

import { getAllCategories } from "../../services";

import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

import "./Navbar.css";

function Navbar({ setCategory, setSearchKeyword }) {
  const [categoryOptions, setCategoryOptions] = useState();
  const [searchterm, setSearchTerm] = useState();

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    setSearchKeyword(searchterm);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCategories();
      setCategoryOptions(["All", ...data]);
    };
    fetchData();
  }, []);

  return (
    <div className="nav-container">
    <nav>
      <AiOutlineMenu className="menu-icon" />
      <div className="select-input">
        <select onChange={handleCategoryChange}>
          {categoryOptions &&
            categoryOptions.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
        </select>
      </div>
      <div className="search-text">
        <input
          type="text"
          placeholder="Search-item"
          onChange={handleChange}
        ></input>
        <button className="search-button">
          <BsSearch
            onClick={handleSearchClick}
            color={"white"}
            size={"1.5rem"}
          />
        </button>
      </div>
      <div className="lang-select">
        <select>
          <option>🏳️‍🌈Eng</option>
        </select>
      </div>
      <AiOutlineShoppingCart className="cart-icon" />
      <AiOutlineUser className="user-icon" />
    </nav>
    </div>
  );
}

export default Navbar;
