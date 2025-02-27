"use client";
import React from "react";
import Heading from "./ui/Heading";
import { Movie } from "@/app/types/movie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TvShow } from "../types/tvShow";
import Container from "./ui/Container";

interface TrendingListProps {
  trendingMovies?: Movie[];
  trendingTvShows?: TvShow[];
}

const TrendingList = ({
  trendingMovies,
  trendingTvShows,
}: TrendingListProps) => {
  const router = useRouter();

  return (
    <div>
      {trendingMovies?.length && (
        <section className="trending">
          <Container>
            <Heading title="Trending Movies" />
            <ul>
              {trendingMovies?.map((movie, index) => (
                <li
                  key={movie.id}
                  onClick={() => router.push(`/movies/${movie.id}`)}
                >
                  <p>{index + 1}</p>
                  <Image
                    src={movie.poster_path || '/default-poster.jpg'}
                    alt={movie.title}
                    width={150}
                    height={220}
                  />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {trendingTvShows?.length && (
        <section className="trending__tv">
          <Container>
            <Heading title="Trending Tv Shows" />
            <ul>
              {trendingTvShows?.map((tvShow, index) => (
                <li
                  key={tvShow.id}
                  onClick={() => router.push(`/shows/${tvShow.id}`)}
                >
                  <p>{index + 1}</p>
                  <Image
                    src={tvShow.poster_path}
                    alt={tvShow.name}
                    width={150}
                    height={220}
                  />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </div>
  );
};

export default TrendingList;
