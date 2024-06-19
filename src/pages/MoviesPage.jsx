import MovieCard from "../components/movie/MovieCard";
import useFetch from "../hooks/useFetch";

const MoviesPage = () => {
  const { data } = useFetch("popular");
  const movies = data?.results || [];
  return (
    <>
      <div className="page-container">
        <div className="flex py-8">
          <div className="flex-1">
            <input
              type="text"
              className="w-full p-4 text-white outline-none bg-slate-800 rounded-sm"
              placeholder="Type here to search..."
            />
          </div>
          <button className="p-4 bg-primary text-white rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 text-white">
          {movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default MoviesPage;
