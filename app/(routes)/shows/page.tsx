import React from "react";
import TvShowClient from "./_TvShowsClient";
import { getDiscoverTvShows } from "@/app/lib/tv/tvShows";

const TvShowsPage = async () => {
  const [discoverTvShowLists] = await Promise.all([getDiscoverTvShows()]);

  return (
    <>
      <TvShowClient discoverTvShowLists={discoverTvShowLists} />
    </>
  );
};

export default TvShowsPage;
