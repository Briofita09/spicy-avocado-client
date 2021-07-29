import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../apis/api";

import spicyAvocado from "../assets/images/logos/horizontal.svg";
import homeIcon from "../assets/images/navbar/streamline-icon-house-2@48x48.png";
import listIcon from "../assets/images/navbar/streamline-icon-pencil-write-1@48x48.png";
import searchIcon from "../assets/images/navbar/streamline-icon-search-1@48x48.png";
import accIcon from "../assets/images/navbar/streamline-icon-single-neutral_1@48x48.png";

function WatchList() {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    async function fetchWatchList() {
      try {
        const response = await api.get("/watchlist");
        setWatchList([...response.data]);

        //let watchListArr = response.data;
      } catch (err) {
        console.error(err);
      }
    }
    fetchWatchList();
  }, []);

  return (
    <div>
      <nav>
        <img src={spicyAvocado} alt="spicy avocado logo" />
        <img src={homeIcon} alt="home icon" />
        <Link to="/">Home</Link>
        <img src={listIcon} alt="my list icon" />
        <Link to="/">Minha Lista</Link>
        <img src={searchIcon} alt="search icon" />
        <Link to="/">Pesquisar</Link>
        <img src={accIcon} alt="my account icon" />
        <Link to="/">Minha Conta</Link>
      </nav>
      <section className="minhaLista">
        <h1>Minha Lista: </h1>

        <ul>
          {watchList.map((content) => {
            return (
              <li>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${content.poster_path}`}
                  alt={"content poster"}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default WatchList;
