import React, { useEffect, useState } from "react";
import api from "../apis/api";
import { Link, useHistory, useParams } from "react-router-dom";
import style from "../assets/styles/UserListComments.module.scss";

import NavBar from "../components/NavBar";
import CommentEditionPage from "./CommentEditionPage";

function UserComments() {
  const [state, setState] = useState([]);

  const { contentType } = useParams();

  const history = useHistory();

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await api.get("/profile/userComments");

        setState([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchComments();
  }, []);
  return (
    <div>
      <NavBar contentType={contentType} />
      <table>
        <tbody>
          {state.map((comment) => {
            return (
              <tr className={style.textAjusts}>
                <div className={style.column}>
                  <h3>{comment.title}</h3>
                  <p>{comment.comment}</p>
                </div>
                <td>
                  <div className={style.row}>
                    {/* <button
                      type="button"
                      onClick={() => {
                        history.push(`/${comment._id}/edit-comment`);
                      }}
                    >
                      Editar Comentario
                    </button> */}

                    <button
                      type="submit"
                      onClick={() => {
                        try {
                          api.delete(`/delete-comment/${comment._id}`);
                          history.push(`/profile`);
                        } catch (err) {
                          console.error(err.response.data);
                        }
                      }}
                      id={comment._id}
                    >
                      Deletar comentario
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserComments;
