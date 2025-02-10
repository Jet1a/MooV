import axios from "axios";
import { TvShow } from "../../types/tvShow";

const API_KEY = process.env.TMDB_API_KEY;

const TRENDING_TV_SHOW_URL = "https://api.themoviedb.org/3/trending/tv/week";
const BASE_TV_SHOW_URL = "https://api.themoviedb.org/3/discover/tv";
const AIRING_TV_SHOW_URL = "https://api.themoviedb.org/3/tv/airing_today";
const ON_AIR_TV_SHOW_URL = "https://api.themoviedb.org/3/tv/on_the_air";
const TOP_RATED_TV_SHOW_URL = "https://api.themoviedb.org/3/tv/top_rated";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const getTrendingTvShows = async () => {
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
      throw new Error("Movies trending list failed!");
    }

    const tvShows = response.data.results
      .slice(0, 10)
      .map((tvShow: TvShow) => ({
        ...tvShow,
        poster_path: tvShow.poster_path
          ? `${IMAGE_BASE_URL}${tvShow.poster_path}`
          : null,
      }));

    return tvShows;
  } catch (error) {
    console.error("Error fetching trending movie list", error);
    throw error;
  }
};

export const getDiscoverTvShows = async () => {
  try {
    const response = await axios.get(BASE_TV_SHOW_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
      },
    });

    if (!response) {
      throw new Error("Movies trending list failed!");
    }

    return response.data.results.map((tvShow: TvShow) => ({
      ...tvShow,
      poster_path: tvShow.poster_path
        ? `${IMAGE_BASE_URL}${tvShow.poster_path}`
        : null,
    }));
  } catch (error) {
    console.error("Error fetching trending movie list", error);
    throw error;
  }
};
