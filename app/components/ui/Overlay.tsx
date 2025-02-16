import { Movie } from "@/app/types/movie";
import { TvShow } from "@/app/types/tvShow";
import { Truncate } from "@re-dev/react-truncate";
import Image from "next/image";
import React from "react";

interface OverlayProps {
  movieDetails?: Movie;
  showDetails?: TvShow;
}

const Overlay = ({ movieDetails, showDetails }: OverlayProps) => {
  const item = movieDetails ?? showDetails;

  if (!item) return null;

  return (
    <>
      <section className="hero">
        <div className="overlay">
          <h1 className="overlay__title">
            {"title" in item ? item.title : item.name}
          </h1>
          <span className="overlay__desc">
            <Truncate lines={5}>{item.overview}</Truncate>
          </span>
        </div>
        <div className="banner">
          <Image
            src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
            alt="backdrop"
            width={2000}
            height={2000}
            className="banner__image"
            loading="eager"
            priority
          />
        </div>
      </section>
    </>
  );
};

export default Overlay;
