import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../apis/api";
import styles from "../../assets/styles/Login.module.scss";

import { AuthContext } from "../../contexts/authContext";

function Login(props) {
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
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
      const response = await api.post("/login", state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
      history.push("/contentTypeSelector");
    } catch (err) {
      console.error(err);
      // setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <>
      <div className={styles.loginCard}>
        <h1 className={styles.pageTitle}>Login</h1>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <label htmlFor="signupFormEmail">Seu e-mail:</label>
          <input
            type="email"
            name="email"
            id="signupFormEmail"
            value={state.email}
            error={errors.email}
            onChange={handleChange}
          />

          <label htmlFor="signupFormPassword">Sua senha:</label>
          <input
            type="password"
            name="password"
            id="signupFormPassword"
            value={state.password}
            error={errors.password}
            onChange={handleChange}
          />

          <button type="submit">Fazer Login!</button>

          <Link to="/auth/signup">
            <p>Ainda não tem uma conta? Clique aqui para se cadastrar!</p>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
