import React from "react";
import MovieDetailsClient from "./_MovieDetailsClient";
import {
  getMovieCredits,
  getMovieDetails,
  getMovieReviews,
  getMovieVideos,
  getSimilarMovies,
} from "@/app/lib/movie/movieDetails";

interface IParams {
  movieId: string;
}

const MovieDetailPage = async ({ params }: { params: Promise<IParams> }) => {
  const { movieId } = await params;

  if (!movieId) {
    return <div>Invalid movie ID</div>;
  }

  const [movieDetails, movieCredits, movieVideos, similarMovies, movieReviews] =
    await Promise.all([
      getMovieDetails(movieId),
      getMovieCredits(movieId),
      getMovieVideos(movieId),
      getSimilarMovies(movieId),
      getMovieReviews(movieId),
    ]);
  return (
    <>
      <MovieDetailsClient
        movieDetails={movieDetails}
        movieCredits={movieCredits}
        movieVideos={movieVideos}
        similarMovies={similarMovies}
        movieReviews={movieReviews}
      />
    </>
  );
};

export default MovieDetailPage;
