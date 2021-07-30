import { useParams } from "react-router-dom";

import NavBar from "../components/NavBar";
import GenreSlider from "../components/GenreSlider";

export default function GenrePage(props) {
  const { contentType, genreId } = useParams();

  return (
    <>
      <NavBar contentType={contentType} />
      <GenreSlider contentType={contentType} genreId={genreId} />
    </>
  );
}
