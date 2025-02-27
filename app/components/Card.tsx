"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import defaultPoster from "@/public/default_movie.jpg";
import { Movie } from "../types/movie";
import { TvShow } from "../types/tvShow";

interface CardProps {
  item: Movie | TvShow;
}

const Card = ({ item }: CardProps) => {
  const router = useRouter();
  const isTvShow = "name" in item;

  return (
    <li
      key={item.id}
      className="list__item"
      onClick={() =>
        router.push(`/${isTvShow ? "shows" : "movies"}/${item.id}`)
      }
    >
      <Image
        src={item.poster_path ?? defaultPoster}
        alt={isTvShow ? item.name : item.title}
        width={185}
        height={280}
      />
    </li>
  );
};

export default Card;
