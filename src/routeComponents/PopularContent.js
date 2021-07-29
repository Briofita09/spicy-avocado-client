import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import style from "../assets/styles/PopularContent.module.scss";

import NavBar from "../components/NavBar";
import Slider from "../components/PopularSlider";

function Movies(props) {
  const [genres, setGenres] = useState([]);

  const { contentType } = useParams();

  useEffect(() => {
    async function fetchGenres() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/${contentType}/list?api_key=1dbc566a4812e099606bf66f83159d6e&language=pt-BR`
      );
      setGenres([...response.data.genres]);
      console.log(response.data.genres);
    }
    fetchGenres();
  }, []);

  return (
    <>
      <NavBar />
      <h2>Populares:</h2>
      <Slider infos={contentType} />
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
