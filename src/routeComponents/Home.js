import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../assets/styles/Home.module.scss";

import Logo from "../assets/images/logos/logo.svg";
import List from "../assets/images/cards-home/list.svg";
import Star from "../assets/images/cards-home/star.svg";
import TV from "../assets/images/cards-home/tv.svg";

import Modal from "../components/Modal";

function Home() {
  return (
    <>
      <header className={styles.headerHome}>
        <img src={Logo} alt="Logo" />
        <navbar>
          <nav>
            <button type="button">Ja é cadastrado? Faça login aqui!</button>
          </nav>
          <nav>
            <Link to="/auth/signup">
              <button type="button">Cadastre-se</button>
            </Link>
          </nav>
        </navbar>
      </header>
      <section className={styles.call}>
        <h1>
          Só crítica <span>APIMENTADA!</span>
        </h1>
      </section>
      <section className={styles.cardSection}>
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
