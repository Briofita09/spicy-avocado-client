import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../apis/api";

import spiciAvocado from "../assets/images/logos/horizontal.svg";
import homeIcon from "../assets/images/navbar/streamline-icon-house-2@48x48.png";
import listIcon from "../assets/images/navbar/streamline-icon-pencil-write-1@48x48.png";
import searchIcon from "../assets/images/navbar/streamline-icon-search-1@48x48.png";
import accIcon from "../assets/images/navbar/streamline-icon-single-neutral_1@48x48.png";

function Profile() {
  const [state, setState] = useState({
    name: "",
    email: "",
    userComments: 0,
    creationDate: "",
  });

  const [movieState, setMovieState] = useState({
    movieWatch: 0,
  });

  const [tvState, setTvState] = useState({
    tvWatch: 0,
  });

  const [commentState, setCommentState] = useState({ comments: 0 });

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get(`/profile`);

        setState(...response.data);
      } catch (err) {
        console.error(err);
      }

      try {
        const contentResponse = await api.get("/watchlist");

        if (
          contentResponse.contentType === "movie" &&
          contentResponse.contentStatus === "watched"
        ) {
          setMovieState(movieState.movieWatch++);
        } else if (
          contentResponse.contentType === "tv" &&
          contentResponse.contentStatus === "watched"
        ) {
          setTvState(tvState.tvWatch++);
        }
      } catch (err) {
        console.error(err);
      }

      try {
        const commentResponse = await api.get("/profile/userComments");
        let arrayComments = commentResponse.userComments;
        setCommentState({ commentState: arrayComments.length });
      } catch (err) {
        console.error(err);
      }
    }
    fetchProfile();
  }, []);

  return (
    <div>
      <nav>
        <img src={spiciAvocado} alt="spice avocado logo" />
        <img src={homeIcon} alt="home icon" />
        <Link to="/">Home</Link>
        <img src={listIcon} alt="my list icon" />
        <Link to="/">Minha Lista</Link>
        <img src={searchIcon} alt="search icon" />
        <Link to="/">Pesquisar</Link>
        <img src={accIcon} alt="my account icon" />
        <Link to="/">Minha Conta</Link>
      </nav>

      <section>
        <div>
          <h1>IMAGEM DO USUARIO</h1>
        </div>

        <div>
          <h1>{state.name}</h1>

          <p>É um abacate apimentado desde: {state.creationDate}</p>

          <div>
            <h3>Email: </h3>

            <p>{state.email}</p>
          </div>

          <div>
            <h3>Filmes vistos: </h3>

            <p>{movieState.movieWatch}</p>
          </div>

          <div>
            <h3>Series vistas: </h3>

            <p>{tvState.tvWatch}</p>
          </div>

          <div>
            <h3>Comentarios feitos: </h3>

            <p>{commentState.comments}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
