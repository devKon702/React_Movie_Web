import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const MovieCard = ({
  item: { id, title, release_date, poster_path, vote_average },
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col movie-card p-3 bg-slate-800 rounded-lg select-none h-full">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="w-full h-[200px] object-cover rounded-lg mb-2"
      />
      <div className="flex flex-col flex-1">
        <h3 className="font-bold mb-2">{title}</h3>
        <div className="flex justify-between items-center text-sm opacity-50 mb-6">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average.toFixed(1)}</span>
        </div>
        <button
          className="bg-primary px-6 py-3 w-full capitalize rounded-lg mt-auto"
          onClick={() => navigate(`/movie/${id}`)}
        >
          Watch Now
        </button>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  item: PropTypes.object.isRequired,
  id: PropTypes.number,
  title: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
};

export default MovieCard;
