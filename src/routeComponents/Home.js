import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Home.scss";

import Logo from "../assets/images/logos/logo.svg";
import List from "../assets/images/cards-home/list.svg";
import Star from "../assets/images/cards-home/star.svg";
import TV from "../assets/images/cards-home/tv.svg";

function Home() {
  return (
    <>
      <header>
        <img src={Logo} alt="Logo" />
        <navbar>
          <nav>
            <Link to="/auth/login">Ja é cadastrado? Faça login aqui!</Link>
          </nav>
          <nav>
            <Link to="/auth/signup">
              <button type="button">Cadastre-se</button>
            </Link>
          </nav>
        </navbar>
      </header>

      <h1>
        Só crítica <span>APIMENTADA!</span>
      </h1>
      <section>
        <div>
          <img src={TV} alt="TV" />
          <p>
            Receba <strong>tips</strong> toda semana!
          </p>
        </div>
        <div>
          <img src={List} alt="List" />
          <p>
            Crie sua <strong>Watch List!</strong>
          </p>
        </div>
        <div>
          <img src={Star} alt="Star" />
          <p>
            Poste suas <strong>avaliações!</strong>
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
