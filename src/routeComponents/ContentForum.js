import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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

  const [ourState, setOurState] = useState([]);

  const [state, setState] = useState({
    title: "",
    comment: "",
  });

  const { contentType, contentId } = useParams();

  function handleChange(event) {
    setState(event.target.value);
  }

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      const response = await api.put(
        `/${contentType}/${contentId}/add-comment`,
        {
          state,
        }
      );
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

        setTmdbState(...tmdbResponse.data);

        const commentResponse = await api.get(
          `/${contentType}/${contentId}/contentComments`
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
          <img
            src={`https://image.tmdb.org/t/p/w200/${tmdbState.poster_path}`}
          />
        </div>

        <div>
          <h1>Discussão: </h1>
          <h1>{this.tmdbState.original_title}</h1>
          <h1>{this.tmdbState.release_date}</h1>
        </div>
      </section>

      <section className="comments">
        <ul>
          {ourState.comment.map((comment) => {
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
          <Editor
            editorState={state.title}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onChange={handleChange}
          />
          <label htmlFor="comment">Comentario: </label>
          <Editor
            editorState={state.comment}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onChange={handleChange}
          />
          ;<button onSubmit={handleSubmit}>Publicar</button>
        </form>
      </section>
    </div>
  );
}

export default ContentForum;
