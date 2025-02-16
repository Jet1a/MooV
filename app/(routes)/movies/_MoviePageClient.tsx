"use client";
import Lists from "@/app/components/Lists";
import Container from "@/app/components/ui/Container";
import Overlay from "@/app/components/ui/Overlay";
import { Movie } from "@/app/types/movie";
import React, { useEffect, useState } from "react";

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
  const [overlayMovie, setOverlayMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (movieLists.length > 0) {
      const randomMovie = Math.floor(Math.random() * movieLists.length);
      setOverlayMovie(movieLists[randomMovie]);
    }
  }, [movieLists]);

  if (!overlayMovie) {
    return null;
  }

  return (
    <article>
      <Overlay movieDetails={overlayMovie} />
      <section className="movie__lists">
        <Container>
          <Lists title="Discover" movieLists={movieLists} />
          <Lists title="Now Showing" movieLists={nowPlayingMovies} />
          <Lists title="Popular" movieLists={popularMovies} />
          <Lists title="Top Rated" movieLists={ratedMovies} />
          <Lists title="Up Coming" movieLists={upcomingMovies} />
        </Container>
      </section>
    </article>
  );
};

export default MoviePageClient;
