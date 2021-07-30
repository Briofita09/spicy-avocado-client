import React from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

import SearchResult from "../components/SearchResult";

export default function SearchPage(props) {
  const { contentType } = useParams();

  const [searchState, setSearchState] = useState({
    name: "",
  });

  const [infoState, setInfoState] = useState([]);

  function handleChange(event) {
    setSearchState({ ...searchState, [event.target.name]: event.target.value });
  }
  console.log(infoState);

  return (
    <>
      <NavBar contentType={contentType} />
      <section>
        <input
          value={searchState.name}
          id="name"
          type="text"
          name="name"
          placeholder="Busque aqui!"
          onChange={handleChange}
        />

        <button
          type="submit"
          onClick={async () => {
            const response = await axios.get(
              `https://api.themoviedb.org/3/search/${contentType}?api_key=1dbc566a4812e099606bf66f83159d6e&query=${searchState.name}`
            );
            setInfoState([...response.data.results]);
          }}
        >
          Pesquisar
        </button>
      </section>

      {Boolean(infoState) && (
        <SearchResult contentType={contentType} infoState={infoState} />
      )}
    </>
  );
}
