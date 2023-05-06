import React from "react";
import { useSelector } from "react-redux";
import { getMovies, getShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = ({
  // handleMovieInc,
  // handleMovieDec,
  // handleShowDec,
  // handleShowInc,
  // moviePage,
  // showPage,
  handleShowText,
  handleMovieText,
  movieText,
  showText
}) => {
  const movies = useSelector(getMovies);
  const shows = useSelector(getShows);
  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie) => (
        <MovieCard key={movie.imdbID} data={movie} />
      ))
    ) : (
      <div>
        <h3>{movies.Error}</h3>
      </div>
    );

  let renderShows = "";

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show) => <MovieCard key={show.imdbID} data={show} />)
    ) : (
      <div>
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <div className="subHead">
        <h2>Movies</h2>
        <div className="text">
        <em>  Search movie </em>
        <input
          type="text"
          value={movieText}
          placeholder="Search movie..."
          onChange={handleMovieText}
          className="input"
        />
        </div>
        </div>
        <div className="movie-container">{renderMovies}</div>
        {/* <div className="pagination">
          {moviePage !== 1 && (
            <button value={movieText} onClick={handleMovieDec} className="btn">
              Prev
            </button>
          )}

          <button onClick={handleMovieInc} className="btn">
            Next
          </button>
        </div> */}
      </div>

      <div className="movie-list">
      <div className="subHead">
        <h2>Shows</h2>
        <div className="text">
          <em>Search show </em>
        <input
          type="text"
          value={showText}
          placeholder="Search show..."
          onChange={handleShowText}
          className="input"
        />
        </div>
        </div>
        <div className="movie-container">{renderShows}</div>
        {/* <div className="pagination">
          {showPage !== 1 && (
            <button onClick={handleShowDec} className="btn">
              Prev
            </button>
          )}
          <button onClick={handleShowInc} className="btn">
            Next
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default MovieListing;
