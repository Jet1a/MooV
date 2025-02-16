"use client";
import Lists from "@/app/components/Lists";
import Container from "@/app/components/ui/Container";
import Overlay from "@/app/components/ui/Overlay";
import { TvShow } from "@/app/types/tvShow";
import React, { useEffect, useState } from "react";

interface TvShowClientProps {
  popularTvShowLists: TvShow[];
  topRatedTvShowLists: TvShow[];
  trendingTvShowLists: TvShow[];
  secondaryTrendingTvShowLists: TvShow[];
}

const TvShowClient = ({
  popularTvShowLists,
  secondaryTrendingTvShowLists,
  topRatedTvShowLists,
  trendingTvShowLists,
}: TvShowClientProps) => {
  const [overlayShow, setOverlayShow] = useState<TvShow | null>(null);

  useEffect(() => {
    if (trendingTvShowLists.length > 0) {
      const randomShow = Math.floor(Math.random() * trendingTvShowLists.length);
      setOverlayShow(trendingTvShowLists[randomShow]);
    }
  }, [trendingTvShowLists]);

  if (!overlayShow) {
    return null;
  }

  return (
    <article>
      <Overlay showDetails={overlayShow} />
      <section className="movie__lists">
        <Container>
          <Lists title="Trending" tvShowLists={trendingTvShowLists} />
          <Lists title="Top Rated" tvShowLists={topRatedTvShowLists} />
          <Lists
            title="You'll Love These"
            tvShowLists={secondaryTrendingTvShowLists}
          />
          <Lists title="Popular" tvShowLists={popularTvShowLists} />
        </Container>
      </section>
    </article>
  );
};

export default TvShowClient;
