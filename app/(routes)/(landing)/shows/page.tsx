import React from "react";
import TvShowClient from "./_TvShowsClient";
import {
  getPopularTvShows,
  getTopRatedTvShows,
  getTrendingTvShows,
} from "@/app/lib/tv/tvShows";

const TvShowsPage = async () => {
  const [
    popularTvShowLists,
    trendingTvShowLists,
    secondaryTrendingTvShowLists,
    topRatedTvShowLists,
  ] = await Promise.all([
    getPopularTvShows(),
    getTrendingTvShows(),
    getTrendingTvShows(true),
    getTopRatedTvShows(),
  ]);

  return (
    <>
      <TvShowClient
        popularTvShowLists={popularTvShowLists}
        trendingTvShowLists={trendingTvShowLists}
        secondaryTrendingTvShowLists={secondaryTrendingTvShowLists}
        topRatedTvShowLists={topRatedTvShowLists}
      />
    </>
  );
};

export default TvShowsPage;
