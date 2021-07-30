import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../apis/api";
import axios from "axios";
import style from "../assets/styles/ContentDescription.module.scss";

import NavBar from "../components/NavBar";

function ContentDescription() {
  const [tmdbState, setTmdbState] = useState({
    poster_path: "",
    original_title: "",
    original_name: "",
    release_date: "",
    first_air_date: "",
    genres: [],
    overview: "",
  });

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

  let title;
  if (contentType === "tv") {
    title = tmdbState.original_name;
  } else {
    title = tmdbState.original_title;
  }

  let date;
  if (contentType === "tv") {
    date = tmdbState.first_air_date;
  } else {
    date = tmdbState.release_date;
  }

  return (
    <>
      <NavBar />
      <section className={style.contentContainer}>
        <div className={style.picAndTitle}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${tmdbState.poster_path}`}
            alt={title}
          />
          <div className={style.infos}>
            <h1>{`${title} (${new Date(date).getFullYear()})`}</h1>
            <h3>Sinopse: </h3>
            <p>{tmdbState.overview}</p>
          </div>
        </div>
        <div className={style.genresBlock}>
          <h1>Gênero: </h1>
          <div>
            {tmdbState.genres.map((genre) => {
              return (
                <Link to={`/${contentType}/${genre.id}/genrePage`}>
                  <button type="button" className={style.Button}>
                    {genre.name}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <hr className={style.sectionDiv} />
      <section className={style.commentsSection}>
        <div className={style.titleAndButton}>
          <h1>Discussão:</h1>
          <Link to={`/${contentType}/${contentId}/contentComments`}>
            <button type="button" className={style.Button}>
              Participar da discussão
            </button>
          </Link>
        </div>
        <ul className={style.forumContainer}>
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
    </>
  );
}

export default ContentDescription;
