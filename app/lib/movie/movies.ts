import axios from "axios";
import { Movie } from "../../types/movie";

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const TOP_RATED_MOVIES_URL = "https://api.themoviedb.org/3/movie/top_rated";
const POPULAR_MOVIES_URL = "https://api.themoviedb.org/3/movie/popular";
const UPCOMING_MOVIES_URL = "https://api.themoviedb.org/3/movie/upcoming";
const NOW_PLAYING_MOVIES_URL = "https://api.themoviedb.org/3/movie/now_playing";
const TRENDING_MOVIES_URL = "https://api.themoviedb.org/3/trending/movie/week";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const getMovies = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
        sort_by: "popularity.desc",
        include_adult: false,
        page: 1,
      },
    });

    if (!response || !response.data) {
      throw new Error("Movies list failed!");
    }

    return response.data.results.map((movie: Movie) => ({
      ...movie,
      poster_path: movie.poster_path
        ? `${IMAGE_BASE_URL}${movie.poster_path}`
        : null,
    }));
  } catch (error) {
    console.error("Error fetching movie list", error);
    throw error;
  }
};

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(TRENDING_MOVIES_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
      },
    });

    if (!response || !response.data) {
      throw new Error("Movies trending list failed!");
    }

    const movies = response.data.results.slice(0, 10).map((movie: Movie) => ({
      ...movie,
      poster_path: movie.poster_path
        ? `${IMAGE_BASE_URL}${movie.poster_path}`
        : null,
    }));

    return movies;
  } catch (error) {
    console.error("Error fetching trending movie list", error);
    throw error;
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await axios.get(TOP_RATED_MOVIES_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
      },
    });

    if (!response || !response.data) {
      throw new Error("Rated Movies list failed!");
    }

    const movies = response.data.results.map((movie: Movie) => ({
      ...movie,
      poster_path: movie.poster_path
        ? `${IMAGE_BASE_URL}${movie.poster_path}`
        : null,
    }));

    return movies;
  } catch (error) {
    console.error("Error fetching trending movie list", error);
    throw error;
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(POPULAR_MOVIES_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
        page: 2,
      },
    });

    if (!response || !response.data) {
      throw new Error("Popular Movie lists failed!");
    }

    return response.data.results.map((movie: Movie) => ({
      ...movie,
      poster_path: movie.poster_path
        ? `${IMAGE_BASE_URL}${movie.poster_path}`
        : null,
    }));
  } catch (error) {
    console.error("Error fetching popular movie lists", error);
    throw error;
  }
};

export const getUpcomingMovies = async () => {
  try {
    const response = await axios.get(UPCOMING_MOVIES_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
        page: 2,
      },
    });

    if (!response || !response.data) {
      throw new Error("Upcoming Movie lists failed!");
    }

    return response.data.results.map((movie: Movie) => ({
      ...movie,
      poster_path: movie.poster_path
        ? `${IMAGE_BASE_URL}${movie.poster_path}`
        : null,
    }));
  } catch (error) {
    console.error("Error fetching upcoming movie lists", error);
    throw error;
  }
};

export const getNowPlayingMovies = async () => {
  try {
    const response = await axios.get(NOW_PLAYING_MOVIES_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
        page: 2,
      },
    });

    if (!response || !response.data) {
      throw new Error("Now playing Movie lists failed!");
    }

    return response.data.results.map((movie: Movie) => ({
      ...movie,
      poster_path: movie.poster_path
        ? `${IMAGE_BASE_URL}${movie.poster_path}`
        : null,
    }));
  } catch (error) {
    console.error("Error fetching now playing movie lists", error);
    throw error;
  }
};
