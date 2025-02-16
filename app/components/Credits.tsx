"use client";

import { MovieDetails } from "@/app/types/movie";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Heading from "./ui/Heading";
import { CastMember, CrewMember } from "@/app/types/movieType";
import Image from "next/image";
import defaultAvatar from "@/public/default_avatar.jpg";
import { TVShowDetails } from "@/app/types/tvShow";

interface CreditsProps {
  movieDetails?: MovieDetails;
  credits?: { creditsCast: CastMember[]; creditsCrew: CrewMember[] };
  showDetails?: TVShowDetails;
}

const Credits = ({ movieDetails, credits, showDetails }: CreditsProps) => {
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const runtime = movieDetails?.runtime;
    if (runtime) {
      setDuration(`${Math.floor(runtime / 60)}h ${runtime % 60}m`);
    }
    const releaseDate =
      movieDetails?.release_date || showDetails?.first_air_date;
    if (releaseDate) {
      setDate(format(releaseDate, "d MMM yyyy"));
    }
  }, [movieDetails, showDetails]);

  const details: MovieDetails | TVShowDetails | undefined =
    movieDetails || showDetails;

  return (
    <section className="details__information">
      <div className="__description">
        <Heading title="Description" />
        <span>{details?.overview}</span>
        <div className="__credits">
          <div className="__credits__item">
            {duration ? (
              <>
                <span>Duration</span>
                <span>{duration}</span>
              </>
            ) : "number_of_episodes" in details! ? (
              <>
                <span>Total Episode</span>
                <span>{details?.number_of_episodes}</span>
              </>
            ) : null}
          </div>
          <div className="__credits__item">
            <span>Release Date</span>
            <span>{date}</span>
          </div>
          <div className="__credits__item">
            <span>Score</span>
            <span>{details?.vote_average?.toFixed(2)}</span>
          </div>
        </div>

        <div className="__credits">
          <div className="__credits__item">
            <p>Production By</p>
            <div className="__credits__items">
              {details?.production_companies?.slice(0, 1).map((company) => (
                <span key={company.id}>{company.name}</span>
              ))}
            </div>
          </div>
          <div className="__credits__item">
            <p>Genre</p>
            <div className="__credits__items">
              {details?.genres?.map((genre) => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        {credits?.creditsCast?.length ?? 0 > 0 ? (
          <>
            <Heading title="Cast" />
            <div className="details__cast">
              {credits?.creditsCast?.map((cast, index) => (
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
          </>
        ) : (
          <>
            <Heading title="Crew" />
            <div className="details__cast">
              {credits?.creditsCrew?.map((cast, index) => (
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
                    <p>As {cast.job}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Credits;
