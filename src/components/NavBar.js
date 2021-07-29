import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logos/horizontal.svg";
import homeIcon from "../assets/images/navbar/streamline-icon-house-2@48x48.png";
import listIcon from "../assets/images/navbar/streamline-icon-pencil-write-1@48x48.png";
import searchIcon from "../assets/images/navbar/streamline-icon-search-1@48x48.png";
import accIcon from "../assets/images/navbar/streamline-icon-single-neutral_1@48x48.png";

function NavBar() {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <nav>
        <Link to="/contentTypeSelector">
          <img src={homeIcon} alt="" />
          <p>Home</p>
        </Link>
        <Link to="/watchlist">
          <img src={listIcon} alt="" />
          <p>Minha Lista</p>
        </Link>
        <Link to="/search">
          <img src={searchIcon} alt="" />
          <p>Pesquisar</p>
        </Link>
        <Link to="/profile">
          <img src={accIcon} alt="" />
          <p>Minha Conta</p>
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
