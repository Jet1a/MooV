"use client";
import React, { useMemo, useRef } from "react";
import { Movie } from "../types/movie";
import TrendingList from "../components/TrendingList";
import { TvShow } from "../types/tvShow";
import Overlay from "../components/ui/Overlay";

interface HomeClientProps {
  trendingMovies: Movie[];
  trendingTvShows: TvShow[];
}

const HomeClient = ({ trendingMovies, trendingTvShows }: HomeClientProps) => {
  const overlayMovieRef = useRef<Movie | null>(null);

  const overlayMovie = useMemo(() => {
    if (!overlayMovieRef.current && trendingMovies.length > 0) {
      const randomIndex = Math.floor(Math.random() * trendingMovies.length);
      overlayMovieRef.current = trendingMovies[randomIndex];
    }
    return overlayMovieRef.current;
  }, [trendingMovies]);

  if (!overlayMovie) {
    return null;
  }

  return (
    <article>
      <Overlay movieDetails={overlayMovie} />
      <TrendingList trendingMovies={trendingMovies} />
      <TrendingList trendingTvShows={trendingTvShows} />
    </article>
  );
};

export default HomeClient;
