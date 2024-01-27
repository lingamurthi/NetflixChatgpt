import { API_OPTIONS, SEARCH_QUERY_API } from "../utils/constants";

const usesearchMovieTMDB = async (movie) => {
  const data = await fetch(
    SEARCH_QUERY_API+
      movie +
      "&include_adult=false&language=en-US&page=1",
    API_OPTIONS
  );
  const json = await data.json();
  return json.results;
};

export default usesearchMovieTMDB;
