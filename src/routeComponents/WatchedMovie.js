import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

import like from "../assets/images/other-icons/like.png";
import dislike from "../assets/images/other-icons/dislike.png";

function WatchedMovie() {
  return (
    <section>
      <NavBar/>
      <article>
        {/* movie.img */}
        {/* movie.title + movie.year */}
        <p>Genero: {/* render movie.genres */}</p>
        <p>Sinopse: {/* movie.description*/}</p>
        <button>
          <img src={like} alt="" />
        </button>
        <button>
          <img src={dislike} alt="" />
        </button>
        <button>Remover da minha lista</button>
        <button>Marcar como não visto</button>
      </article>
      <article>
        <h2>Discussão:</h2>
        {/* <rendercomment> render user + user.comment <rendercomment> */}
        <button>Comentar na discussão</button>
      </article>
    </section>
  );
}

export default WatchedMovie;
