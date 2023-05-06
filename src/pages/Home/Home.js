import React, { useEffect, useState } from "react";
import MovieListing from "../../components/MovieListing/MovieListing";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  fetchMoviesSeries,
  getMovies,
} from "../../features/movies/movieSlice";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  //let [moviePage, setMoviePage] = useState(1);
  let [searchText, setMovieText] = useState('Harry');

  let [showPage, setShowPage] = useState('Vampire');
  const selectedMovie = useSelector(getMovies);
  //const selectedSeries = useSelector(getShows);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies(searchText));
    dispatch(fetchMoviesSeries(showPage));
  }, [dispatch, showPage, searchText]);
  // const handleMovieInc = () => {
  //   selectedMovie && setMoviePage(moviePage++);
  // };
  // const handleMovieDec = () => {
  //   moviePage > 0 && setMoviePage(moviePage--);
  // };

  // const handleShowInc = () => {
  //   selectedSeries && setShowPage(showPage++);
  // };
  // const handleShowDec = () => {
  //   showPage > 0 && setShowPage(showPage--);
  // };
  function handleMovieText(event) {
  
      setMovieText(event.target.value)

  }
  function handleShowText(event) {
  
    setShowPage(event.target.value)

}

  return (
    <div>
      {Object.keys(selectedMovie).length === 0 ? (
        <div className="loader">
          <ClipLoader color={"yellow"} loader={selectedMovie} size={150} />
        </div>
      ) : (
        <MovieListing
          movieText={searchText}
          showText={showPage}
          handleShowText={handleShowText}
          handleMovieText={handleMovieText}
        />
      )}
    </div>
  );
};

export default Home;
