import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../apis/api";
import styles from "../../assets/styles/Signup.module.scss";

import HeaderNoLogin from "../../components/HeaderNoLogin";

function Signup(props) {
  const [state, setState] = useState({ name: "", password: "", email: "" });
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
  });

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/signup", state);
      setErrors({ name: "", password: "", email: "" });
      props.history.push("/auth/login");
    } catch (err) {
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <>
      <HeaderNoLogin signupButtonRender={false} />
      <h1 className={styles.pageTitle}>Cadastro</h1>
      <div className={styles.signupCard}>
        <form onSubmit={handleSubmit} className={styles.signupForm}>
          <label htmlFor="signupFormName">Nome: </label>
          <input
            type="text"
            name="name"
            id="signupFormName"
            value={state.name}
            error={errors.name}
            onChange={handleChange}
          />

          <label htmlFor="signupFormEmail">E-mail: </label>
          <input
            type="email"
            name="email"
            id="signupFormEmail"
            value={state.email}
            error={errors.email}
            onChange={handleChange}
          />

          <label htmlFor="signupFormPassword">Senha: </label>
          <input
            type="password"
            name="password"
            id="signupFormPassword"
            value={state.password}
            error={errors.password}
            onChange={handleChange}
          />

          <button type="submit">Signup!</button>

          <Link to="/auth/login">
            <p>Já possui uma conta? Faça login!</p>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Signup;
