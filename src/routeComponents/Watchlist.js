import React, { useEffect, useState } from "react";
import api from "../apis/api";

import NavBar from "../components/NavBar";
import WatchlistPosters from "../components/WatchlistPosters";
import style from "../assets/styles/Watchlist.module.scss";

import { useParams } from "react-router-dom";

function WatchList() {
  const [responseDB, setResponseDB] = useState([]);
  const { contentType } = useParams();

  useEffect(() => {
    async function fetchWatchList() {
      const response = await api.get("/watchlist");
      setResponseDB([...response.data]);
      console.log(responseDB);
    }
    fetchWatchList();
  }, []);
  return (
    <>
      <NavBar contentType={contentType} />
      <h1>Minha Lista: </h1>
      <div class={style.containerBox}>
        {responseDB.map((content) => {
          return (
            <div className={style.postersContainer}>
              <WatchlistPosters
                contentType={content.contentType}
                contentId={content.contentId}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WatchList;
