import React from "react";
import { Link } from "react-router-dom";


function Home2() {
    return <section>
         <nav>
        <h1>Spicy Avocado</h1>
        <img/>
        <Link to="/">Minha Lista</Link><img/> 
        <Link to="/">Minha Conta</Link><img/> 
      </nav>
      <h3>O que gostaria de pesquisar?</h3>
      <Link to="/">Filmes</Link>
      <Link to="/">Series</Link>
    </section>
}

export default Home2