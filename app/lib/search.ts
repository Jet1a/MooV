import axios from "axios";
import { Movie } from "../types/movie";

const API_KEY = process.env.TMDB_API_KEY;

const MULTI_SEARCH_URL = "https://api.themoviedb.org/3/search/multi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const getMultiSearchLists = async (query?: string) => {
  try {
    const [page1, page2] = await Promise.all([
      axios.get(MULTI_SEARCH_URL, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          language: "en-US",
          query: query,
          page: 1,
        },
      }),
      axios.get(MULTI_SEARCH_URL, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          language: "en-US",
          query: query,
          page: 2,
        },
      }),
    ]);

    if (!page1 || !page2) {
      throw new Error("Search lists failed!");
    }

    const combinedResults: Movie[] = [
      ...page1.data.results,
      ...page2.data.results,
    ];

    return combinedResults.map((list: Movie) => ({
      ...list,
      poster_path: list.poster_path
        ? `${IMAGE_BASE_URL}${list.poster_path}`
        : null,
    }));
  } catch (error) {
    console.error("Error fetching search lists", error);
    throw error;
  }
};
