export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATHAR =
  "https://avatars.githubusercontent.com/u/43093095?v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const GENAI_KEY = process.env.REACT_APP_GENAI_KEY;

export const MOVIE_TRAILER="https://api.themoviedb.org/3/movie/"

export const NOW_PLAYINGMOVIES="https://api.themoviedb.org/3/movie/now_playing?page=1"

export const POPULAR_MOVIES="https://api.themoviedb.org/3/movie/popular?page=1"

export const SEARCH_QUERY_API="https://api.themoviedb.org/3/search/movie?query=" 