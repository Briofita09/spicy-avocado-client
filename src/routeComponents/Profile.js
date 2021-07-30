import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../apis/api";
import style from "../assets/styles/Profile.module.scss";

import NavBar from "../components/NavBar";

function Profile() {
  const [userState, setUserState] = useState([]);
  const [commentsLength, setCommentsLength] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchProfile() {
      const response = await api.get("/profile");
      setCommentsLength([...response.data.userComments]);
      setUserState({ ...response.data });
    }
    fetchProfile();
  }, []);

  function handleSubmit() {
    localStorage.clear();
    history.push("/");
  }

  console.log(commentsLength);
  return (
    <div>
      <NavBar />
      <section className={style.profileContainer}>
        <h2>{userState.name}</h2>
        <p>É um abacate apimentado desde:</p>
        <span>{new Date(userState.creationDate).getFullYear()}</span>

        <div className={style.accountInfosContainer}>
          <p>
            <strong>Email: </strong>
            {userState.email}
          </p>
          <p>
            <strong>Filmes vistos: </strong>
          </p>
          <p>
            <strong>Series completas: </strong>
          </p>
          <div>
            <p>
              <strong>Comentarios feitos: </strong>
              {commentsLength.length}
            </p>
            <Link to="/profile/userComments">Exibir</Link>
          </div>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Logout
        </button>
      </section>
    </div>
  );
}

export default Profile;
