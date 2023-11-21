import React, { useRef } from 'react'
import lang from '../utils/LanguageConstants'
import openai from "../utils/openai"
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector(store=>store.config.lang);
  const searchText = useRef(null);

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",API_OPTIONS);

    const json = await data.json();

    return json.results;
  }

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //Make an API call to GPT API and get Movie Results

    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query: " + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Jawan, Dream Girl, Welcome, Frozen"
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    const gptMovies = gptResults.choices[0]?.message?.content?.split(",");

    //For each movie search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMoviesTMDB(movie));
    // This will return an array of 5 promises.
    const tmbdResults = await Promise.all(promiseArray);
    console.log(tmbdResults);

    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmbdResults})
    );
  }
  return (
    <div className='md:pt-[10%] pt-[50%] flex justify-center mx-2 sm:mx-0'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg shadow-xl' onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type="text" className='px-4 py-2 m-4 col-span-9 rounded-lg text-sm' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='col-span-3 m-4  px-3 bg-red-700 text-white rounded-lg text-sm flex justify-center items-center' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar