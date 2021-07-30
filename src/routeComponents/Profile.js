import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../apis/api";

import NavBar from "../components/NavBar";

function Profile() {
  const [state, setState] = useState({
    name: "",
    email: "",
    creationDate: "",
  });

  const [movieState, setMovieState] = useState({
    movieWatch: 0,
  });

  const [tvState, setTvState] = useState({
    tvWatch: 0,
  });

  const [commentsState, setCommentState] = useState({
    userComments: 0,
  });

  const history = useHistory();

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get(`/profile`);

        setState({ ...response.data });
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
        const commentsResponse = await api.get("/profile/userComments");
        setCommentState({ userComments: commentsResponse.data.length });
      } catch (err) {
        console.error(err);
      }
    }
    fetchProfile();
  }, []);

  function handleSubmit() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div>
      <NavBar />
      <section>
        <div>
          <h1>IMAGEM DO USUARIO</h1>
        </div>

        <div>
          <h1>{state.name}</h1>

          <p>
            É um abacate apimentado desde:{" "}
            {new Date(state.creationDate).getFullYear()}
          </p>

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

            <p>{commentsState.userComments}</p>

            <Link to="/profile/userComments">
              <button>Exibir</button>
            </Link>
          </div>

          <button type="submit" onClick={handleSubmit}>
            Logout
          </button>
        </div>
      </section>
    </div>
  );
}

export default Profile;
