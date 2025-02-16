"use client";
import { Movie } from "@/app/types/movie";
import Image from "next/image";
import React from "react";
import Heading from "./ui/Heading";
import { useRouter } from "next/navigation";
import defaultPoster from "@/public/default_movie.jpg";
import { TvShow } from "@/app/types/tvShow";

interface ListsProps {
  title: string;
  movieLists?: Movie[];
  tvShowLists?: TvShow[];
}

const Lists = ({ title, movieLists, tvShowLists }: ListsProps) => {
  const router = useRouter();
  const items = tvShowLists ?? movieLists ?? [];

  return (
    <div>
      <Heading title={title} />
      <ul className="movies">
        {items.map((item) => (
          <li
            key={item.id}
            className="movies__item"
            onClick={() =>
              router.push(`/${tvShowLists ? "shows" : "movies"}/${item.id}`)
            }
          >
            <Image
              src={item.poster_path ?? defaultPoster}
              alt={"title" in item ? item.title : item.name} // Handle both types
              width={185}
              height={280}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
