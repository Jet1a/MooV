import React from "react";
import ShowPageClient from "./_ShowPageClient";
import { getMultiSearchLists } from "@/app/lib/search";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { q: string };
}) => {
  const query = await searchParams.q;

  const [searchLists] = await Promise.all([getMultiSearchLists(query)]);

  return (
    <>
      <ShowPageClient searchLists={searchLists} query={query} />
    </>
  );
};

export default SearchPage;
