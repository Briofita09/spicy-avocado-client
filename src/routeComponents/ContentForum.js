import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useHistory } from "react-router-dom";

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
    comments: [],
  });

  const [state, setState] = useState({
    title: "",
    comment: "",
  });

  const history = useHistory();

  const { contentType, contentId } = useParams();

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.post(`/${contentType}/${contentId}/add-comment`, state);
      history.push(`/profile`);
    } catch (err) {
      console.error(err.response.data);
    }
  }

  useEffect(() => {
    async function fetchComments() {
      try {
        const tmdbResponse = await axios.get(
          `https://api.themoviedb.org/3/${contentType}/${contentId}?api_key=1dbc566a4812e099606bf66f83159d6e&language=pt-BR`
        );

        setTmdbState({
          poster_path: tmdbResponse.data.poster_path,
          original_title: tmdbResponse.data.original_title,
          release_date: tmdbResponse.data.release_date,
        });
        console.log(contentType, contentId);

        console.log(tmdbResponse);

        const commentResponse = await api.get(
          `/${contentType}/${contentId}/contentComments`
        );
        console.log(commentResponse);
        setOurState({ comments: [...commentResponse.data] });
      } catch (err) {
        console.error(err);
      }
    }
    fetchComments();
  }, [contentType, contentId]);

  console.log(state);
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
        <Link to="/profile">Minha Conta</Link>
      </nav>

      <section className="main">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200/${tmdbState.poster_path}`}
          />
        </div>

        <div>
          <h1>Discussão: </h1>
          <h1>{tmdbState.original_title}</h1>
          <h1>{new Date(tmdbState.release_date).getFullYear()}</h1>
        </div>
      </section>

      <section className="comments">
        <ul>
          {ourState.comments.map((comment) => {
            return (
              <li>
                <h4>{comment.commentCreator.name}</h4>
                <p>{comment.title}</p>
                <span>{comment.comment}</span>
              </li>
            );
          })}
        </ul>
      </section>
      <hr />
      <section className="newComment">
        <form>
          <label htmlFor="title">Titulo: </label>
          <input
            id="title"
            value={state.title}
            type="text"
            onChange={handleChange}
            name="title"
          />
          <label htmlFor="comment">Comentario: </label>
          <textarea
            value={state.comment}
            id="comment"
            type="text"
            onChange={handleChange}
            name="comment"
          />
          <button type="submit" onClick={handleSubmit}>
            Publicar
          </button>
        </form>
      </section>
    </div>
  );
}

export default ContentForum;
