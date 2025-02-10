import React from "react";
import { Movie } from "../types/movie";
import Image from "next/image";
import TrendingList from "../components/TrendingList";
import { TvShow } from "../types/tvShow";

interface HomeClientProps {
  trendingMovies: Movie[];
  trendingTvShows: TvShow[];
}

const HomeClient = ({
  trendingMovies,

  trendingTvShows,
}: HomeClientProps) => {
  const firstMovie = trendingMovies[0];

  return (
    <article>
      <section className="hero">
        <div className="overlay">
          <h1 className="overlay__title">{firstMovie.title}</h1>
          <span className="overlay__desc">{firstMovie.overview}</span>
        </div>
        <div className="banner">
          <Image
            src={`https://image.tmdb.org/t/p/original/${firstMovie.backdrop_path}`}
            alt="backdrop"
            width={2000}
            height={2000}
            className="banner__image"
          />
        </div>
      </section>

      <TrendingList trendingMovies={trendingMovies} />
      <TrendingList trendingTvShows={trendingTvShows} />
    </article>
  );
};

export default HomeClient;
