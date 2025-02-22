import { MovieDetails } from "@/app/types/movie";
import Heading from "./ui/Heading";
import { CastMember, CrewMember } from "@/app/types/movieType";
import { TVShowDetails } from "@/app/types/tvShow";
import CastList from "./details/CastList";
import CrewList from "./details/CrewList";
import CreditItem from "./details/CreditItem";
import { formatDate, formatDuration } from "../utils/format";

interface CreditsProps {
  movieDetails?: MovieDetails;
  credits?: { creditsCast: CastMember[]; creditsCrew: CrewMember[] };
  showDetails?: TVShowDetails;
}

const Credits = ({ movieDetails, credits, showDetails }: CreditsProps) => {
  const details = movieDetails || showDetails;
  const duration = formatDuration(details);
  const date = formatDate(
    movieDetails?.release_date ?? showDetails?.first_air_date
  );
  const isTVShow = !!(details && "number_of_episodes" in details);

  return (
    <section className="details__information">
      <div className="__description">
        <Heading title="Description" />
        <span>{details?.overview}</span>

        <div className="__credits">
          <CreditItem label="Duration" value={duration} />
          <CreditItem
            label="Total Episodes"
            value={isTVShow ? details?.number_of_episodes : undefined}
          />
          <CreditItem label="Release Date" value={date} />
          <CreditItem label="Score" value={details?.vote_average?.toFixed(2)} />
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
        {credits?.creditsCast?.length ? (
          <CastList cast={credits.creditsCast} />
        ) : (
          <CrewList crew={credits?.creditsCrew ?? []} />
        )}
      </div>
    </section>
  );
};

export default Credits;
