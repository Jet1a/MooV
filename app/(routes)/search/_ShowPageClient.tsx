import Lists from "@/app/components/Lists";
import Container from "@/app/components/ui/Container";
import { Movie } from "@/app/types/movie";
import React from "react";

interface ShowPageClientProps {
  searchLists: Movie[];
  query: string | null;
}

const ShowPageClient = ({ searchLists, query }: ShowPageClientProps) => {

  return (
    <Container>
      <div className="search">
        <Lists
          title={`Search result for ${query?.toUpperCase()}`}
          movieLists={searchLists}
          searchPage={true}
        />
      </div>
    </Container>
  );
};

export default ShowPageClient;
