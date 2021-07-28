import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../assets/styles/Home.module.scss";

import List from "../assets/images/cards-home/list.svg";
import Star from "../assets/images/cards-home/star.svg";
import TV from "../assets/images/cards-home/tv.svg";

import HeaderNoLogin from "../components/HeaderNoLogin";

function Home() {
  return (
    <>
      <HeaderNoLogin signupButtonRender={true} />
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
