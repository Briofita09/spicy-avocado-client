import React from "react";
import { Link } from "react-router-dom";

export default function SearchResult(props) {
  console.log(props.infoState);
  return (
    <>
      {props.infoState.map((result) => {
        return (
          <Link to={`/${props.contentType}/${result.id}/contentDescription`}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${result.poster_path}`}
              alt={result.original_title}
            />
          </Link>
        );
      })}
    </>
  );
}
