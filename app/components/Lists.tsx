"use client";
import { Movie } from "@/app/types/movie";
import React from "react";
import Heading from "./ui/Heading";
import { TvShow } from "@/app/types/tvShow";
import Card from "./Card";

interface ListsProps {
  title: string;
  movieLists?: Movie[];
  tvShowLists?: TvShow[];
  searchPage?: boolean;
}

const Lists = ({
  title,
  movieLists,
  tvShowLists,
  searchPage = false,
}: ListsProps) => {
  const items = tvShowLists ?? movieLists ?? [];

  if (items.length <= 0) {
    return null;
  }

  return (
    <div className="card__lists">
      <Heading title={title} />
      <ul className={`${searchPage ? "list__grid" : "list"}`}>
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Lists;
