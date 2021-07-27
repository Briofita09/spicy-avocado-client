import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="text-center">
      <nav>
        <h1>Spicy Avocado</h1>
        <img /> <Link to="/auth/login">Ja é cadastrado? Faça login aqui!</Link>
        <Link className="btn btn-lg btn-primary" to="/auth/signup">
          Cadastre-se
        </Link>
      </nav>
      <h2>Só crítica APIMENTADA!</h2>
      <nav>
        <div><img/><p>Receba <strong>tips</strong> toda semana</p></div>
        <div><img/><p>Crie suas <strong>Watch Lists!</strong></p></div>
        <div><img/><p>Poste suas <strong>avaliações!</strong></p></div>
      </nav>
    </section>
  );
}

export default Home;
