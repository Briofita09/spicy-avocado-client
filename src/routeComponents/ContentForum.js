import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import api from "../apis/api";

import spicyAvocado from "../assets/images/logos/horizontal.svg";
import homeIcon from "../assets/images/navbar/streamline-icon-house-2@48x48.png";
import listIcon from "../assets/images/navbar/streamline-icon-pencil-write-1@48x48.png";
import searchIcon from "../assets/images/navbar/streamline-icon-search-1@48x48.png";
import accIcon from "../assets/images/navbar/streamline-icon-single-neutral_1@48x48.png";

function ContentForum() {
  const [tmdbState, setTmdbState] = useState({
    poster_path: "",
    original_title: "",
    release_date: "",
  });

  const [ourState, setOurState] = useState({
    comment: [],
  });

  const { contentType, contentId } = useParams();

  useEffect(() => {
    async function fetchComments() {
      try {
        const tmdbResponse = await axios.get(
          `https://api.themoviedb.org/3/${contentType}/${contentId}?api_key=1dbc566a4812e099606bf66f83159d6e&language=pt-BR`
        );

        setTmdbState(...tmdbResponse.data);

        const commentResponse = await api.get(
          `/${contentType}/${contentId}/add-comment`
        );

        setOurState(...commentResponse.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchComments();
  });

  return (
    <div>
      <nav>
        <img src={spicyAvocado} alt="spice avocado logo" />
        <img src={homeIcon} alt="home icon" />
        <Link to="/">Home</Link>
        <img src={listIcon} alt="my list icon" />
        <Link to="/">Minha Lista</Link>
        <img src={searchIcon} alt="search icon" />
        <Link to="/">Pesquisar</Link>
        <img src={accIcon} alt="my account icon" />
        <Link to="/">Minha Conta</Link>
      </nav>

      <section className="main">
        <div>
          <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} />
        </div>

        <div>
          <h1>Discussão: </h1>
          <h1>{this.tmdbState.original_title}</h1>
          <h1>{this.tmdbState.release_date}</h1>
        </div>
      </section>

      <section className="comments"></section>
    </div>
  );
}

export default ContentForum;
