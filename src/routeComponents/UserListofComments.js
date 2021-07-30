import React, { useEffect, useState } from "react";
import api from "../apis/api";
import { Link, useHistory } from "react-router-dom";

function UserComments() {
  const [state, setState] = useState([]);
  const [commentState, setCommentState] = useState({});

  const history = useHistory();

  async function handleDelete(props) {
    try {
      await api.delete(`/delete-comment/${state.commentId}`);
      history.push(`/profile`);
    } catch (err) {
      console.error(err.response.data);
    }
  }

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
  //console.log(state);
  console.log(commentState.commentId);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Titulo do Comentario</th>
            <th>Comentario</th>
            <th>Id do Filme</th>
          </tr>
        </thead>
        <tbody>
          {state.map((comment) => {
            return (
              <div>
                <tr>
                  <td>{comment.title}</td>
                  <td>{comment.comment}</td>
                  <td>{comment.contentId}</td>
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
