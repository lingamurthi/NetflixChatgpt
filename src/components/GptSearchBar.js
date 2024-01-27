import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { genAI } from "../utils/genai";
import { addGptMovieResult } from "../utils/gptSlice";
import usesearchMovieTMDB from "../hooks/useSearchMovieTMDB";

const GptSearchBar = () => {

  const [errorHandling,setErrorHandling] =useState("")
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      "only give names of 5 movies, comma seperated like the example result given ahead. Example Result: kgf2 kantara robert rrr james ";
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(gptQuery);
    const response = await result.response;
    const searchResult = response.text();

    if (!searchResult) {
      setErrorHandling("Please search suggestions like Indian movies or South indian movies Because AI chat gpt is in starting learing phase ")
      //TO ERROR HANDLING
    }

    const gptMovies = searchResult.split(",");

    const promiseArray = gptMovies.map((movie) => usesearchMovieTMDB(movie));
    //this will return array of promises [promise1,promise2,promise3,promise4,promise5]

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
      <h1>{errorHandling}</h1>
    </div>
  );
};

export default GptSearchBar;
