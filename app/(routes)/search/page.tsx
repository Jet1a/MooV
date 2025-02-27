import React from "react";
import ShowPageClient from "./_ShowPageClient";
import { getMultiSearchLists } from "@/app/lib/search";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) => {
  const { q } = await searchParams;

  const searchLists = await getMultiSearchLists(q);

  return (
    <>
      <ShowPageClient searchLists={searchLists} query={q} />
    </>
  );
};

export default SearchPage;
