import Credits from "@/app/components/Credits";
import Lists from "@/app/components/Lists";
import Reviews from "@/app/components/Reviews";
import Video from "@/app/components/Video";

import Container from "@/app/components/ui/Container";
import { Reviewers } from "@/app/types/movie";
import { CastMember, CrewMember, VideoResult } from "@/app/types/movieType";
import { TvShow, TVShowDetails } from "@/app/types/tvShow";
import Image from "next/image";
import React from "react";

interface ShowDetailsClientProps {
  showDetails: TVShowDetails;
  showCredits: { creditsCast: CastMember[]; creditsCrew: CrewMember[] };
  showVideos: VideoResult[];
  showReviews: Reviewers[];
  similarShows: TvShow[];
}

const ShowDetailsClient = ({
  showDetails,
  showCredits,
  showVideos,
  showReviews,
  similarShows,
}: ShowDetailsClientProps) => {

  return (
    <article className="">
      <section className="hero__details">
        <div className="banner__details">
          <Image
            src={`https://image.tmdb.org/t/p/original/${showDetails.backdrop_path}`}
            alt="backdrop"
            width={2000}
            height={2000}
            className="banner__details__image"
          />
        </div>
      </section>

      <div className="overlay__details">
        <Image
          src={showDetails.poster_path}
          alt={showDetails.name}
          height={350}
          width={250}
          className="overlay__details__image"
          priority
        />
        <h1 className="__title">{showDetails.name}</h1>
      </div>

      <Container>
        <Credits showDetails={showDetails} credits={showCredits} />
        <Video videos={showVideos} />
        <Reviews reviews={showReviews} />
        <Lists title="You may also like" tvShowLists={similarShows} />
      </Container>
    </article>
  );
};

export default ShowDetailsClient;
