import { getTrendingMovies} from "../lib/movie/movies";
import { getTrendingTvShows } from "../lib/tv/tvShows";
import HomeClient from "./_HomeClient";

const Home = async () => {
  
  const trendingMovies = await getTrendingMovies();
  const trendingTvShows = await getTrendingTvShows();

  return (
    <div>
      <main>
        <HomeClient
          trendingMovies={trendingMovies}
          trendingTvShows={trendingTvShows}
        />
      </main>
    </div>
  );
};

export default Home;
