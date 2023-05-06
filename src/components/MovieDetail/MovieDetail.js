import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchMoviesSeriesOrMovieDetails, getSelectedMoviesOrShow, movieAction } from '../../features/movies/movieSlice'
import './MovieDetail.scss'
import { Link } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'


const MovieDetail = () => {
  const {imdbID} = useParams()
  const dispatch = useDispatch()
  const selectedMovie = useSelector(getSelectedMoviesOrShow)


  useEffect(()=>{
    dispatch(fetchMoviesSeriesOrMovieDetails(imdbID))
    return (()=>{
      dispatch(movieAction.cleanSelection())
    })
  },[dispatch, imdbID])
  return (
    <>
    <div className="back">
       <Link to='/' className=" back-link"><i className='fa fa-arrow-left'></i></Link> 
    </div>
     
    <div className='movie-section'>
    
      {Object.keys(selectedMovie).length === 0 ? 
      (<div className="loader">
        <ClipLoader color={'yellow'} loader={selectedMovie} size={150}/>
      </div>)  
      :
      <>
      <div className='section-left'>
      <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
      </div>
      <div className='section-right'>


      <div className='movie-title'>{selectedMovie.Title}</div>
        <div className='movie-rating'>
          <span>
            Imdb Rating <i className="fa fa-star"></i> : {selectedMovie.imdbRating}
          </span>
          <span>
            Imdb Votes <i className="fa fa-thumbs-up"></i> : {selectedMovie.imdbVotes}
          </span>
          <span>
            Runtime <i className="fa fa-film"></i> : {selectedMovie.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calendar"></i> : {selectedMovie.Year}
          </span>
        </div>

        <div className="movie-plot">
          {selectedMovie.Plot}
        </div>
        <div className='movie-info'>
        <div>
            <span>Writer</span>
            <span>{selectedMovie.Writer}</span>
          </div>
          <div>
            <span>Director</span>
            <span>{selectedMovie.Director}</span>
          </div>

          <div>
            <span>Stars</span>
            <span>{selectedMovie.Actors}</span>
          </div>

          <div>
            <span>Genres</span>
            <span>{selectedMovie.Genre}</span>
          </div>

          <div>
            <span>Languages</span>
            <span>{selectedMovie.Language}</span>
          </div>

          <div>
            <span>Awards</span>
            <span>{selectedMovie.Awards}</span>
          </div>
        
          
        </div>    
      </div>
      
      </>

    } 

     
    </div>
    </>
  )
}

export default MovieDetail