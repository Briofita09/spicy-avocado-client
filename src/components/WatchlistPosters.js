import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import WatchlistRemover from "../components/WatchlistRemover";
import style from "../assets/styles/WatchlistPoster.module.scss";

export default function Watchlist(props) {
  const [state, setState] = useState({ content: {} });

  useEffect(() => {
    async function fechData() {
      const responsive = await axios.get(
        `https://api.themoviedb.org/3/${props.contentType}/${props.contentId}?api_key=1dbc566a4812e099606bf66f83159d6e&language=pt-BR`
      );
      console.log(responsive.data);
      setState({ content: { ...responsive.data } });
    }
    fechData();
  }, []);

  return (
    <div className={style.masterContainer}>
      <div className={style.posterContainer}>
        <Link
          to={`/${props.contentType}/${props.contentId}/contentDescription`}
        >
          <img
            src={`https://image.tmdb.org/t/p/w200/${state.content.poster_path}`}
            alt="Content Poster"
          />
        </Link>
        <WatchlistRemover
          contentType={props.contentType}
          contentId={props.contentId}
        />
      </div>
    </div>
  );
}
