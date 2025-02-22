import { format } from "date-fns";
import { MovieDetails } from "@/app/types/movie";
import { TVShowDetails } from "../types/tvShow";
import { isMovieDetails } from "../types/typeGuard";

export const formatDuration = (details?: MovieDetails | TVShowDetails) => {
  if (details && isMovieDetails(details) && details.runtime) {
    return `${Math.floor(details.runtime / 60)}h ${details.runtime % 60}m`;
  }
  return null;
};


export const formatDate = (date?: string) => {
  return date ? format(date, "d MMM yyyy") : "";
};
