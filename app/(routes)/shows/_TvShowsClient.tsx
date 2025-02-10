import MovieLists from "@/app/components/movie/MovieLists";
import Container from "@/app/components/ui/Container";
import Overlay from "@/app/components/ui/Overlay";
import { TvShow } from "@/app/types/tvShow";
import React from "react";

interface TvShowClientProps {
  discoverTvShowLists: TvShow[];
}

const TvShowClient = ({ discoverTvShowLists }: TvShowClientProps) => {
  const overlayShows = discoverTvShowLists[0];

  return (
    <article>
      <Overlay showDetails={overlayShows} />
      <section className="movie__lists">
        <Container>
          <MovieLists title="Discover" tvShowLists={discoverTvShowLists} />
        </Container>
      </section>
    </article>
  );
};

export default TvShowClient;
