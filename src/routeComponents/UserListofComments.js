import React, { useEffect, useState } from "react";
import api from "../apis/api";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";

function UserComments() {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await api.get("/profile/userComments");
        console.log(response.data);
        setState([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchComments();
  }, []);
  console.log(state);
  return (
    <div>
      <NavBar />
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
                    <Link to="/:commentId/edit-comment">
                      <button>Editar Comentario</button>
                    </Link>
                    <Link to="/:commentId/delete-comment">
                      <button>Deletar comentario</button>
                    </Link>
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
