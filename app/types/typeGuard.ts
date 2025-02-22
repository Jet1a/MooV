import { MovieDetails } from "./movie";
import { TVShowDetails } from "./tvShow";

export const isMovieDetails = (
  details: MovieDetails | TVShowDetails
): details is MovieDetails => {
  return (details as MovieDetails).runtime !== undefined;
};
