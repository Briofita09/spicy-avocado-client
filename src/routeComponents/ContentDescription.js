import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../apis/api";
import axios from "axios";

// import like from "../assets/images/other-icons/like.png";
// import dislike from "../assets/images/other-icons/dislike.png";

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

  const [commentState, setCommentState] = useState([]);

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
  }, []);

  return (
    <div>
      <section className="topo">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200/${tmdbState.poster_path}`}
          />
        </div>
        <div>
          <h1>{tmdbState.original_title}</h1>
          <h1>{tmdbState.release_date}</h1>
        </div>
        <div>
          <h3>Gênero: </h3>
          <ul>
            {tmdbState.genres.map((genre) => {
              return <li>{this.genre}</li>;
            })}
          </ul>
        </div>
        <div>
          <h3>Sinopse: </h3>
          <p>{tmdbState.overview}</p>
        </div>
        <div className="likebtn">
          <button>Bom</button>
          <span>{likeState.likeCounter}</span>
        </div>
        <div className="dislikebtn">
          <button>Ruim</button>
          <span>{likeState.dislikeCounter}</span>
        </div>
      </section>
      <hr />
      <section className="Comentarios">
        <div>
          <div>
            <h1>Discussão:</h1>
            <ul>
              {commentState.map((comment) => {
                return (
                  <li>
                    <h4>{comment.commentCreator.name}</h4>
                    <p>{comment.title}</p>
                    <span>{comment.comment}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <Link to={"/contentForum"}>
        <button>Comentar na discussão</button>
      </Link>
    </div>
  );
}

export default ContentDescription;
