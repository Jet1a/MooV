import { Reviewers } from "@/app/types/movie";
import { CastMember, CrewMember, VideoResult } from "@/app/types/movieType";
import { TvShow } from "@/app/types/tvShow";
import axios from "axios";

const API_KEY = process.env.TMDB_API_KEY;

const TV_SHOW_DETAILS_URL = "https://api.themoviedb.org/3/tv/";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const getTvShowDetails = async (showId: string) => {
  try {
    if (!showId) {
      throw new Error("Invalid show ID");
    }

    const response = await axios.get(`${TV_SHOW_DETAILS_URL}${showId}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
      },
    });

    if (!response) {
      throw new Error("Show details failed!");
    }

    return {
      ...response.data,
      poster_path: response.data.poster_path
        ? `${IMAGE_BASE_URL}${response.data.poster_path}`
        : null,
    };
  } catch (error) {
    console.error("Error fetching trending show lists", error);
    throw error;
  }
};

export const getTvShowCredits = async (showId?: string) => {
  try {
    if (!showId) {
      throw new Error("Invalid show ID");
    }

    const response = await axios.get(
      `${TV_SHOW_DETAILS_URL}${showId}/credits`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          language: "en-US",
        },
      }
    );

    if (!response || !response.data) {
      throw new Error("Show credits fetch failed!");
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
    console.error("Error fetching show credits", error);
    throw error;
  }
};

export const getTvShowVideos = async (
  showId?: string
): Promise<VideoResult[]> => {
  try {
    if (!showId) {
      throw new Error("Invalid show ID");
    }

    const response = await axios.get(`${TV_SHOW_DETAILS_URL}${showId}/videos`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: "en-US",
      },
    });

    if (!response || !response.data) {
      throw new Error("Tv show videos fetch failed!");
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

export const getTvShowReviews = async (showId?: string) => {
  try {
    if (!showId) {
      throw new Error("Invalid show ID");
    }

    const response = await axios.get(
      `${TV_SHOW_DETAILS_URL}${showId}/reviews`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          language: "en-US",
        },
      }
    );

    if (!response || !response.data) {
      throw new Error("Tv show reviews fetch failed!");
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
    console.error("Error fetching show reviews details", error);
    throw error;
  }
};

export const getSimilarShows = async (showId?: string) => {
  try {
    if (!showId) {
      throw new Error("Invalid show ID");
    }

    const response = await axios.get(
      `${TV_SHOW_DETAILS_URL}${showId}/similar`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          language: "en-US",
        },
      }
    );

    if (!response || !response.data) {
      throw new Error("Similar tv showsfetch failed!");
    }

    return response.data.results.map((tvShow: TvShow) => ({
      ...tvShow,
      poster_path: tvShow.poster_path
        ? `${IMAGE_BASE_URL}${tvShow.poster_path}`
        : null,
    }));
  } catch (error) {
    console.error("Error fetching similar tv shows", error);
    throw error;
  }
};
