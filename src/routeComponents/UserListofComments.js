import React, { useEffect, useState } from "react";
import api from "../apis/api";
import { Link, useHistory } from "react-router-dom";

import NavBar from "../components/NavBar";

function UserComments() {
  const [state, setState] = useState([]);
  const [commentState, setCommentState] = useState({});

  const history = useHistory();

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await api.get("/profile/userComments");

        setState([...response.data]);

        const commentResponse = await api.get("/profile/userComments");

        setCommentState({ ...commentResponse.data });
      } catch (err) {
        console.error(err);
      }
    }
    fetchComments();
  }, []);
  return (
    <div>
      <NavBar />
      <table>
        <tbody>
          {state.map((comment) => {
            return (
              <div>
                <tr>
                  <td>{comment.title}</td>
                  <td>{comment.comment}</td>
                  <td>
                    <Link>
                      <button type="button">Editar Comentario</button>
                    </Link>

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
                  </td>
                </tr>
              </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserComments;
