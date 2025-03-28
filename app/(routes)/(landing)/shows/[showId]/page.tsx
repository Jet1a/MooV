import {
  getSimilarShows,
  getTvShowCredits,
  getTvShowDetails,
  getTvShowReviews,
  getTvShowVideos,
} from "@/app/lib/tv/tvShowDetails";
import React from "react";
import ShowDetailsClient from "./_ShowDetailsClient";

interface IParams {
  showId: string;
}

const TvShowDetailPage = async ({ params }: { params: Promise<IParams> }) => {
  const { showId } = await params;

  if (!showId) {
    return <div>Invalid movie ID</div>;
  }

  const [showDetails, showCredits, showVideos, showReviews, similarShows] =
    await Promise.all([
      getTvShowDetails(showId),
      getTvShowCredits(showId),
      getTvShowVideos(showId),
      getTvShowReviews(showId),
      getSimilarShows(showId),
    ]);

  return (
    <>
      <ShowDetailsClient
        showDetails={showDetails}
        showCredits={showCredits}
        showVideos={showVideos}
        showReviews={showReviews}
        similarShows={similarShows}
      />
    </>
  );
};

export default TvShowDetailPage;
