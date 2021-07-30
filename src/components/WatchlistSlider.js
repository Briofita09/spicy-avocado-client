import React from "react";
import style from "../assets/styles/PopularSlider.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

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
    <div className={style.sliderContainer}>
      <div>
        <Link
          to={`/${props.contentType}/${props.contentId}/contentDescription`}
        >
          <img
            src={`https://image.tmdb.org/t/p/w200/${state.content.poster_path}`}
            alt={state.original_title}
          />
        </Link>
        <p>{state.original_title}</p>
      </div>
    </div>
  );
}
