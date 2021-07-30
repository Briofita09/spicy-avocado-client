import React from "react";
import { useHistory } from "react-router-dom";
import api from "../apis/api";

export default function WatchlistRemove(props) {
  const history = useHistory();

  function handleChange() {
    try {
      api.delete(
        `/${props.contentType}/${props.contentId}/watchlist/remove-content`
      );
      history.push("/profile");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button type="button" onClick={handleChange}>
      Remover da lista
    </button>
  );
}
