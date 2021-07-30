import React, { useEffect, useState } from "react";
import api from "../apis/api";

import NavBar from "../components/NavBar";
import WatchlistPosters from "../components/WatchlistPosters";
import WatchlistRemover from "../components/WatchlistRemover";

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

      {responseDB.map((content) => {
        return (
          <div>
            <WatchlistPosters
              contentType={content.contentType}
              contentId={content.contentId}
            />
          </div>
        );
      })}
    </>
  );
}

export default WatchList;
