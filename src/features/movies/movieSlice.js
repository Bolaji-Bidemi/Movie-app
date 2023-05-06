import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey } from "../../common/api/MovieApiKey";
import movieClient from "../../common/api/MovieApi";

export const fetchMovies = createAsyncThunk("fetchMovies", async (movieText) => {
  try {
    const movie = movieText.charAt(0).toUpperCase() + movieText.slice(1);
    const response = await movieClient.get(`?apiKey=${apiKey}&s=${movie}&type=movie&page=${1}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const fetchMoviesSeries = createAsyncThunk(
  "fetchMoviesSeries",
  async (showText) => {
    try {
      const show = showText.charAt(0).toUpperCase() + showText.slice(1);
      const response = await movieClient.get(
        `?apiKey=${apiKey}&s=${show}&type=series&page=${1}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchMoviesSeriesOrMovieDetails = createAsyncThunk(
  "fetchMoviesSeriesOrMovieDetails",
  async (id) => {
    try {
      const response = await movieClient.get(
        `?apiKey=${apiKey}&i=${id}&Plot=full`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
    isLoading: false,
    isError: false,
  },
  reducers: {
    addMovie: (state, { payload }) => {
      state.movies = payload;
    },
    cleanSelection: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesSeriesOrMovieDetails.pending, (state) => {
      // state.isLoading = true
    });
    builder.addCase(fetchMovies.pending, (state) => {
      // state.isLoading = true
    });
    builder.addCase(fetchMoviesSeries.pending, (state) => {
      // state.isLoading = true
    });

    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      return { ...state, movies: action.payload };
    });
    builder.addCase(fetchMovies.rejected, (state) => {
      state.isError = true;
    });
    builder.addCase(fetchMoviesSeries.fulfilled, (state, action) => {
      state.isLoading = false;
      return { ...state, shows: action.payload };
    });
    builder.addCase(
      fetchMoviesSeriesOrMovieDetails.fulfilled,
      (state, action) => {
        state.isLoading = false;
        return { ...state, selectedMovieOrShow: action.payload };
      }
    );
  },
});

export const movieAction = movieSlice.actions;
export const getMovies = (state) => state.movie.movies;
export const getShows = (state) => state.movie.shows;
export const getSelectedMoviesOrShow = (state) =>
  state.movie.selectedMovieOrShow;
export default movieSlice.reducer;
