import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logos/logo.svg";
import styles from "../assets/styles/HeaderNoLogin.module.scss";

export default function HeaderNoLogin(props) {
  const signupButtonRender = props.signupButtonRender;
  return (
    <header className={styles.headerHome}>
      <img src={Logo} alt="Logo" />
      <navbar>
        <nav>
          <Link to="/auth/login">
            <button type="button">Ja é cadastrado? Faça login aqui!</button>
          </Link>
        </nav>
        {Boolean(signupButtonRender) && (
          <nav>
            <Link to="/auth/signup">
              <button type="button">Cadastre-se!</button>
            </Link>
          </nav>
        )}
      </navbar>
    </header>
  );
}
