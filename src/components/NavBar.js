import React from "react";
import { Link } from "react-router-dom";
import style from "../assets/styles/Navbar.module.scss";

import Logo from "../assets/images/logos/horizontal.svg";
import homeIcon from "../assets/images/navbar/streamline-icon-house-2@48x48.png";
import listIcon from "../assets/images/navbar/streamline-icon-pencil-write-1@48x48.png";
import searchIcon from "../assets/images/navbar/streamline-icon-search-1@48x48.png";
import accIcon from "../assets/images/navbar/streamline-icon-single-neutral_1@48x48.png";

function NavBar(props) {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <nav>
        <Link to="/contentTypeSelector" className={style.navlink}>
          <img src={homeIcon} alt="Home Icon" />
          <p>Home</p>
        </Link>
        <Link to="/watchlist" className={style.navlink}>
          <img src={listIcon} alt="List Icon" />
          <p>Minha Lista</p>
        </Link>
        <Link to={`/${props.contentType}/search`} className={style.navlink}>
          <img src={searchIcon} alt="Search Icon" />
          <p>Pesquisar</p>
        </Link>
        <Link to="/profile" className={style.navlink}>
          <img src={accIcon} alt="Profile Icon" />
          <p>Minha Conta</p>
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
