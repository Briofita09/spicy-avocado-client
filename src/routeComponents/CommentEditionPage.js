import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../apis/api";
import axios from "axios";

import NavBar from "../components/NavBar";

export default function CommentEditionPage() {
  const { commentId } = useParams();

  const [commentState, setCommentState] = useState();

  const history = useHistory();

  function handleChange(event) {
    setCommentState({
      ...commentState,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await api.put(`/${commentId}/edit-comment`, commentState);
      history.push(`/profile`);
    } catch (err) {
      console.error(err.response.data);
    }
  }

  useEffect(() => {
    async function fetchComments() {
      const response = await axios.get(`/${commentId}/show-comment}`);
      setCommentState(response.data);
    }
    fetchComments();
  }, []);

  return (
    <>
      <NavBar />
      <form>
        <label htmlFor="title">Titulo: </label>
        <input
          id="title"
          value={commentState.title}
          type="text"
          onChange={handleChange}
          name="title"
        />
        <label htmlFor="comment">Comentario: </label>
        <textarea
          value={commentState.comment}
          id="comment"
          type="text"
          onChange={handleChange}
          name="comment"
        />
        <button type="submit" onClick={handleSubmit}>
          Publicar
        </button>
      </form>
    </>
  );
}
