import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "../assets/styles/PopularContent.module.scss";

import NavBar from "../components/NavBar";
import Slider from "../components/PopularSlider";

function Movies(props) {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const response = axios.get(
      `https://api.themoviedb.org/3/genre/${props.params}/list?api_key=1dbc566a4812e099606bf66f83159d6e&language=pt-BR`
    );

    setGenres([...response.data.genres]);
  }, []);

  return (
    <>
      <NavBar />
      <h2>Populares:</h2>
      <Slider />
      <section className={style.genresGrid}>
        {genres.map((genre) => {
          return (
            <Link to={`/${props.params}/${genre.name}`}>
              <button type="button">{genre.name}</button>{" "}
            </Link>
          );
        })}
      </section>
    </>
  );
}

export default Movies;
