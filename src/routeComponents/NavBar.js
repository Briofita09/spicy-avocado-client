import React from "react";
import { Link } from "react-router-dom";

import homeIcon from "../assets/images/navbar/streamline-icon-house-2@48x48.png";
import listIcon from "../assets/images/navbar/streamline-icon-pencil-write-1@48x48.png";
import searchIcon from "../assets/images/navbar/streamline-icon-search-1@48x48.png";
import accIcon from "../assets/images/navbar/streamline-icon-single-neutral_1@48x48.png";

function NavBar() {
  return (
    <nav>
      <h1>Spicy Avocado</h1>
      <img />
      <img src={homeIcon} alt="" />
      <Link to="/">Home</Link>
      <img src={listIcon} alt="" />
      <Link to="/">Minha Lista</Link>
      <img src={searchIcon} alt="" />
      <Link to="/">Pesquisar</Link>
      <img src={accIcon} alt="" />
      <Link to="/">Minha Conta</Link>
    </nav>
  );
}

export default NavBar;
