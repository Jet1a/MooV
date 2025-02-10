"use client";

import { MovieDetails } from "@/app/types/movie";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import { CastMember, CrewMember } from "@/app/types/movieType";
import Image from "next/image";
import defaultAvatar from "@/public/default_avatar.jpg";

interface MovieCreditsProps {
  movieDetails: MovieDetails;
  movieCredits: { creditsCast: CastMember[]; creditsCrew: CrewMember[] };
}

const MovieCredits = ({ movieDetails, movieCredits }: MovieCreditsProps) => {
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (movieDetails.runtime) {
      const hours = Math.floor(movieDetails.runtime / 60);
      const minutes = movieDetails.runtime % 60;

      setDuration(`${hours}h ${minutes}m`);
    }

    if (movieDetails.release_date) {
      setDate(format(movieDetails.release_date, "d MMM yyyy"));
    }
  }, [movieDetails.runtime, movieDetails.release_date]);

  return (
    <section className="details__information">
      <div className="__description">
        <Heading title="Description" />
        <span>{movieDetails.overview}</span>
        <div className="__credits">
          <div className="__credits__item">
            <span>Duration</span>
            <span>{duration}</span>
          </div>
          <div className="__credits__item">
            <span>Release Date</span>
            <span>{date}</span>
          </div>
          <div className="__credits__item">
            <span>Score</span>
            <span>{movieDetails.vote_average.toFixed(2)}</span>
          </div>
        </div>

        <div className="__credits">
          <div className="__credits__item">
            <p>Production By</p>
            <div className="__credits__items">
              {movieDetails.production_companies.slice(0, 1).map((company) => (
                <span key={company.id}>{company.name} </span>
              ))}
            </div>
          </div>

          <div className="__credits__item">
            <p>Genre</p>
            <div className="__credits__items">
              {movieDetails.genres.map((genre) => (
                <span key={genre.id}>{genre.name} </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Heading title="Cast" />
        <div className="details__cast">
          {movieCredits.creditsCast.map((cast, index) => (
            <div key={index} className="__role">
              <Image
                src={cast.profile_path ?? defaultAvatar}
                alt={cast.name}
                width={140}
                height={200}
                className="__image"
              />
              <div className="__role__desc">
                <p>{cast.name}</p>
                <p>As {cast.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieCredits;
