import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import api from "../apis/api";
import axios from "axios";

import like from "../assets/images/other-icons/like.png";
import dislike from "../assets/images/other-icons/dislike.png";

function MovieDescription() {
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

        setCommentState({ ...commentResponse.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchMovie();
  });

  return (
    <div>
      <section className="topo">
        <div>
          <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} />
        </div>
        <div>
          <h1>{this.original_title}</h1>
          <h1>{this.release_date}</h1>
        </div>
        <div>
          <h3>Gênero: </h3>
          <ul>
            {this.genres.map((genre) => {
              return <li>{this.genre}</li>;
            })}
          </ul>
        </div>
        <div>
          <h3>Sinopse: </h3>
          <p>{this.overview}</p>
        </div>
        <div className="likebtn">
          <button>Bom</button>
          <span>{this.likeCounter}</span>
        </div>
        <div className="dislikebtn">
          <button>Ruim</button>
          <span>{this.dislikeCounter}</span>
        </div>
      </section>
      <hr />
      <section className="Comentarios">
        <div>
          <div>
            <h1>Discussão:</h1>
            <ul>
              {this.comments.map((comment) => {
                return (
                  <li>
                    <h4>{this.comment.commentCreator.name}</h4>
                    <p>{this.comment.title}</p>
                    <span>{this.comment.comment}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MovieDescription;
