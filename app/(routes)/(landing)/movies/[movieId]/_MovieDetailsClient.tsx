import Image from "next/image";
import React from "react";

import { Movie, MovieDetails, Reviewers } from "@/app/types/movie";
import { CastMember, CrewMember, VideoResult } from "@/app/types/movieType";
import Credits from "@/app/components/Credits";
import Video from "@/app/components/Video";
import Container from "@/app/components/ui/Container";
import Lists from "@/app/components/Lists";
import Reviews from "@/app/components/Reviews";

interface MovieDetailsClientProps {
  movieDetails: MovieDetails;
  movieCredits: { creditsCast: CastMember[]; creditsCrew: CrewMember[] };
  movieVideos: VideoResult[];
  similarMovies: Movie[];
  movieReviews: Reviewers[];
}

const MovieDetailsClient = ({
  movieDetails,
  movieCredits,
  movieVideos,
  similarMovies,
  movieReviews,
}: MovieDetailsClientProps) => {
  return (
    <article className="">
      <section className="hero__details">
        <div className="banner__details">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
            alt="backdrop"
            width={2000}
            height={2000}
            className="banner__details__image"
          />
        </div>
      </section>

      <div className="overlay__details">
        <Image
          src={movieDetails.poster_path}
          alt={movieDetails.title}
          height={350}
          width={250}
          className="overlay__details__image"
          priority
        />
        <h1 className="__title">{movieDetails.title}</h1>
      </div>

      <Container>
        <Credits movieDetails={movieDetails} credits={movieCredits} />
        <Video videos={movieVideos} />
        <Reviews reviews={movieReviews} />
        <Lists title="You may also like" movieLists={similarMovies} />
      </Container>
    </article>
  );
};

export default MovieDetailsClient;
