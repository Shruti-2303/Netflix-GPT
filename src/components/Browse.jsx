import { useSelector } from "react-redux";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import usePopularMovies from "./hooks/usePopularMovies";
import useTrendingMovies from "./hooks/useTrendingMovies";
import useUpcomingMovies from "./hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  const showGptPage = useSelector(state=>state.gpt.showGptSearch) 
  return <div>
    <Header/>
    {showGptPage ? <GptSearch/> : <>
      <MainContainer/>
      <SecondaryContainer/>
    </>}
    
    {/*
      Main Container
        - Video Background
        - Video Title
      Secondary Container
        -Movies List * n
          -cards * n
  */}
  </div>;
};

export default Browse;
