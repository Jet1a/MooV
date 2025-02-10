import axios from "axios";
import { Movie, Reviewers } from "../../types/movie";
import { CastMember, CrewMember, VideoResult } from "../../types/movieType";

const API_KEY = process.env.TMDB_API_KEY;
const MOVIE_DETAILS_URL = "https://api.themoviedb.org/3/movie/";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const getMovieDetails = async (movieId?: string) => {
  try {
    if (!movieId) {
      throw new Error("Invalid movie ID");
    }

    const response = await axios.get(`${MOVIE_DETAILS_URL}${movieId}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
      },
    });

    if (!response || !response.data) {
      throw new Error("Movie details fetch failed!");
    }

    return {
      ...response.data,
      poster_path: response.data.poster_path
        ? `${IMAGE_BASE_URL}${response.data.poster_path}`
        : null,
    };
  } catch (error) {
    console.error("Error fetching movie details", error);
    throw error;
  }
};

export const getMovieCredits = async (movieId?: string) => {
  try {
    if (!movieId) {
      throw new Error("Invalid movie ID");
    }

    const response = await axios.get(`${MOVIE_DETAILS_URL}${movieId}/credits`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
      },
    });

    if (!response || !response.data) {
      throw new Error("Movie details fetch failed!");
    }

    const creditsCast: CastMember[] = response.data.cast
      .slice(0, 10)
      .map((cast: CastMember) => ({
        ...cast,
        profile_path: cast.profile_path
          ? `${IMAGE_BASE_URL}${cast.profile_path}`
          : null,
      }));

    const creditsCrew: CrewMember[] = response.data.crew
      .slice(0, 10)
      .map((crew: CrewMember) => ({
        ...crew,
        profile_path: crew.profile_path
          ? `${IMAGE_BASE_URL}${crew.profile_path}`
          : null,
      }));

    return {
      creditsCast,
      creditsCrew,
    };
  } catch (error) {
    console.error("Error fetching movie details", error);
    throw error;
  }
};

export const getMovieVideos = async (
  movieId?: string
): Promise<VideoResult[]> => {
  try {
    if (!movieId) {
      throw new Error("Invalid movie ID");
    }

    const response = await axios.get(`${MOVIE_DETAILS_URL}${movieId}/videos`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
      },
    });

    if (!response || !response.data) {
      throw new Error("Movie details fetch failed!");
    }

    const results = response.data.results.filter(
      (video: VideoResult) => video.type === "Trailer"
    );

    const extraVideos = response.data.results
      .filter((video: VideoResult) => video.type === "Teaser")
      .slice(0, 5);

    return [...results, ...extraVideos];
  } catch (error) {
    console.error("Error fetching movie details", error);
    throw error;
  }
};

export const getSimilarMovies = async (movieId?: string) => {
  try {
    if (!movieId) {
      throw new Error("Invalid movie ID");
    }

    const response = await axios.get(`${MOVIE_DETAILS_URL}${movieId}/similar`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
      },
    });

    if (!response || !response.data) {
      throw new Error("Movie details fetch failed!");
    }

    return response.data.results.slice(0, 10).map((movie: Movie) => ({
      ...movie,
      poster_path: movie.poster_path
        ? `${IMAGE_BASE_URL}${movie.poster_path}`
        : null,
    }));
  } catch (error) {
    console.error("Error fetching movie details", error);
    throw error;
  }
};

export const getMovieReviews = async (movieId?: string) => {
  try {
    if (!movieId) {
      throw new Error("Invalid movie ID");
    }

    const response = await axios.get(`${MOVIE_DETAILS_URL}${movieId}/reviews`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
      },
    });

    if (!response || !response.data) {
      throw new Error("Movie details fetch failed!");
    }

    return response.data.results.map((author: Reviewers) => ({
      ...author,
      author_details: {
        ...author.author_details,
        avatar_path: author.author_details.avatar_path
          ? `${IMAGE_BASE_URL}${author.author_details.avatar_path}`
          : null,
      },
    }));
  } catch (error) {
    console.error("Error fetching movie details", error);
    throw error;
  }
};
