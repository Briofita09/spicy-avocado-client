import React, { useEffect, useState } from "react";
import api from "../apis/api";

import NavBar from "../components/NavBar";

import { useParams } from "react-router-dom";

function WatchList() {
  const [watchList, setWatchList] = useState([]);
  const { contentType } = useParams();

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
      <NavBar contentType={contentType} />

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
