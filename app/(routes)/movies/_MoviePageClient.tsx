import MovieLists from "@/app/components/movie/MovieLists";
import Container from "@/app/components/ui/Container";
import Overlay from "@/app/components/ui/Overlay";
import { Movie } from "@/app/types/movie";
import React from "react";

interface MoviePageClientProps {
  movieLists: Movie[];
  ratedMovies: Movie[];
  upcomingMovies: Movie[];
  popularMovies: Movie[];
  nowPlayingMovies: Movie[];
}

const MoviePageClient = ({
  movieLists,
  ratedMovies,
  upcomingMovies,
  popularMovies,
  nowPlayingMovies,
}: MoviePageClientProps) => {
  const overlayMovie = movieLists[0];

  return (
    <article>
      <Overlay movieDetails={overlayMovie} />
      <section className="movie__lists">
        <Container>
          <MovieLists title="Discover" movieLists={movieLists} />
          <MovieLists title="Now Showing" movieLists={nowPlayingMovies} />
          <MovieLists title="Popular" movieLists={popularMovies} />
          <MovieLists title="Top Rated" movieLists={ratedMovies} />
          <MovieLists title="Up Coming" movieLists={upcomingMovies} />
        </Container>
      </section>
    </article>
  );
};

export default MoviePageClient;
