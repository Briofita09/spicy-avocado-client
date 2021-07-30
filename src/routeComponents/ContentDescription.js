import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../apis/api";
import axios from "axios";
import style from "../assets/styles/ContentDescription.module.scss";

import like from "../assets/images/other-icons/like.png";
import dislike from "../assets/images/other-icons/dislike.png";
import NavBar from "../components/NavBar";

function ContentDescription() {
  const [tmdbState, setTmdbState] = useState({
    poster_path: "",
    original_title: "",
    release_date: "",
    genres: [],
    overview: "",
  });

  const [likeState, setLikeState] = useState({
    likeCounter: 0,
    dislikeCounter: 0,
  });
  //Link para renderizar o poster
  //`https://image.tmdb.org/t/p/w200/${poster_path}`

  const [commentState, setCommentState] = useState({
    comments: [],
  });

  const { contentType, contentId } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const tmdbResponse = await axios.get(
          `https://api.themoviedb.org/3/${contentType}/${contentId}?api_key=1dbc566a4812e099606bf66f83159d6e&language=pt-BR`
        );
        setTmdbState({ ...tmdbResponse.data });

        const likeResponse = await api.get(
          `/${contentType}/${contentId}/contentInfos`
        );

        setLikeState({ ...likeResponse.data });

        const commentResponse = await api.get(
          `/${contentType}/${contentId}/contentComments`
        );
        setCommentState({ comments: commentResponse.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovie();
  }, []);

  return (
    <>
      <NavBar />
      <section className={style.contentContainer}>
        <div className={style.picAndTitle}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${tmdbState.poster_path}`}
            alt={tmdbState.original_title}
          />
          <div className={style.infos}>
            <h1>{tmdbState.original_title}</h1>
            <h1>{` (${new Date(tmdbState.release_date).getFullYear()})`}</h1>
            <h3>Sinopse: </h3>
            <p>{tmdbState.overview}</p>
            <section className={style.rateSection}>
              <button type="submit">
                <img src={like} alt="Like Icon" />
              </button>
              <button type="submit">
                <img src={dislike} alt="Dislike Icon" />
              </button>
            </section>
          </div>
        </div>
        <div className={style.genresBlock}>
          <h3>Gênero: </h3>
          <Link>
            {tmdbState.genres.map((genre) => {
              return (
                <button type="button" className={style.Button}>
                  {genre.name}
                </button>
              );
            })}
          </Link>
        </div>
      </section>
      <hr className={style.sectionDiv} />
      <section className={style.commentsSection}>
        <h1>Discussão:</h1>
        <ul>
          {commentState.comments.map((comment) => {
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
      <Link to={`/${contentType}/${contentId}/contentComments`}>
        <button type="button" className={style.Button}>
          Comentar na discussão
        </button>
      </Link>
    </>
  );
}

export default ContentDescription;
