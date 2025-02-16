import axios from "axios";
import { TvShow } from "../../types/tvShow";

const API_KEY = process.env.TMDB_API_KEY;

const TRENDING_TV_SHOW_URL = "https://api.themoviedb.org/3/trending/tv/week";
const POPULAR_TV_SHOW_URL = "https://api.themoviedb.org/3/tv/popular";
const TOP_RATED_TV_SHOW_URL = "https://api.themoviedb.org/3/tv/top_rated";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const getTrendingTvShows = async (secondary?: boolean) => {
  try {
    const response = await axios.get(TRENDING_TV_SHOW_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
      },
    });

    if (!response) {
      throw new Error("Trending show lists failed!");
    }

    if (secondary) {
      return response.data.results.slice(10, 20).map((tvShow: TvShow) => ({
        ...tvShow,
        poster_path: tvShow.poster_path
          ? `${IMAGE_BASE_URL}${tvShow.poster_path}`
          : null,
      }));
    }

    return response.data.results.slice(0, 10).map((tvShow: TvShow) => ({
      ...tvShow,
      poster_path: tvShow.poster_path
        ? `${IMAGE_BASE_URL}${tvShow.poster_path}`
        : null,
    }));
  } catch (error) {
    console.error("Error fetching trending show lists", error);
    throw error;
  }
};

export const getPopularTvShows = async () => {
  try {
    const response = await axios.get(POPULAR_TV_SHOW_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
      },
    });

    if (!response) {
      throw new Error("Popular shows lists failed!");
    }

    return response.data.results.map((tvShow: TvShow) => ({
      ...tvShow,
      poster_path: tvShow.poster_path
        ? `${IMAGE_BASE_URL}${tvShow.poster_path}`
        : null,
    }));
  } catch (error) {
    console.error("Error fetching popular show lists", error);
    throw error;
  }
};

export const getTopRatedTvShows = async () => {
  try {
    const response = await axios.get(TOP_RATED_TV_SHOW_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
      },
    });

    if (!response) {
      throw new Error("Top rated show lists failed!");
    }

    return response.data.results.map((tvShow: TvShow) => ({
      ...tvShow,
      poster_path: tvShow.poster_path
        ? `${IMAGE_BASE_URL}${tvShow.poster_path}`
        : null,
    }));
  } catch (error) {
    console.error("Error fetching top rated show lists", error);
    throw error;
  }
};
