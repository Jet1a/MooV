import React from "react";
import MoviePageClient from "./_MoviePageClient";
import {
  getMovies,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/app/lib/movie/movies";

const MoviePage = async () => {
  const [
    movieLists,
    ratedMovies,
    popularMovies,
    upComingMovies,
    nowPlayingMovies,
  ] = await Promise.all([
    getMovies(),
    getTopRatedMovies(),
    getPopularMovies(),
    getUpcomingMovies(),
    getNowPlayingMovies(),
  ]);

  return (
    <>
      <MoviePageClient
        movieLists={movieLists}
        ratedMovies={ratedMovies}
        popularMovies={popularMovies}
        upcomingMovies={upComingMovies}
        nowPlayingMovies={nowPlayingMovies}
      />
    </>
  );
};

export default MoviePage;
