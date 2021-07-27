import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logos/logo.svg";
import List from "../assets/images/cards-home/list.svg";
import Star from "../assets/images/cards-home/star.svg";
import TV from "../assets/images/cards-home/tv.svg";

function Home() {
  return (
    <section>
      <nav>
        <img src={Logo} alt="Logo" />
        <Link to="/auth/login">Ja é cadastrado? Faça login aqui!</Link>
        <Link to="/auth/signup">Cadastre-se</Link>
      </nav>
      <h2>Só crítica APIMENTADA!</h2>
      <nav>
        <div>
          <img src={TV} alt="TV" />
          <p>
            Receba <strong>tips</strong> toda semana
          </p>
        </div>
        <div>
          <img src={List} alt="List" />
          <p>
            Crie suas <strong>Watch Lists!</strong>
          </p>
        </div>
        <div>
          <img src={Star} alt="Star" />
          <p>
            Poste suas <strong>avaliações!</strong>
          </p>
        </div>
      </nav>
    </section>
  );
}

export default Home;
