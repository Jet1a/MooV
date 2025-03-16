"use client";
import React, { useEffect, useState } from "react";
import { Movie } from "../../types/movie";
import TrendingList from "../../components/TrendingList";
import { TvShow } from "../../types/tvShow";
import Overlay from "../../components/ui/Overlay";

interface HomeClientProps {
  trendingMovies: Movie[];
  trendingTvShows: TvShow[];
}

const HomeClient = ({ trendingMovies, trendingTvShows }: HomeClientProps) => {
  const [overlayMovie, setOverlayMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (trendingMovies.length > 0) {
      const randomShow = Math.floor(Math.random() * trendingMovies.length);
      setOverlayMovie(trendingMovies[randomShow]);
    }
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
