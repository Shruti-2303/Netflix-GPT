import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return <div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
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
