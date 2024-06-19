import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CastSwiper from "../components/movie/CastSwiper";
import MovieSwiper from "../components/movie/MovieSwiper";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data } = useFetch(id);

  if (!data) return <></>;

  return (
    <>
      <div className="page-container">
        <div className="w-full h-[400px] relative mb-[150px]">
          <img
            src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
          <div className="overlay absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.2)] inset-0"></div>
          <div className="w-1/2 h-[400px] absolute top-1/3 left-1/2 -translate-x-1/2">
            <img
              src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

        <p className="font-bold text-3xl text-center py-8">{data.title}</p>
        <div className="flex gap-3 justify-center">
          {data.genres.map((item) => (
            <span
              key={item.id}
              className="p-3 rounded-md border border-primary text-primary mb-5"
            >
              {item.name}
            </span>
          ))}
        </div>
        <p className="text-center text-sm leading-relaxed">{data.overview}</p>

        <p className="font-bold text-3xl text-center py-8">Cast</p>
        <CastSwiper movieId={+id}></CastSwiper>

        <p className="font-bold text-3xl text-center py-8">Trailer</p>
        <MovieVideo></MovieVideo>

        <p className="font-bold text-3xl text-center py-8">Maybe you like</p>
        <MovieSwiper path={`${id}/similar`}></MovieSwiper>
      </div>
    </>
  );
};

const MovieVideo = () => {
  const { id } = useParams();
  const { data } = useFetch(id + "/videos");
  const videos = data?.results?.slice(0, 1) || [];
  return (
    <>
      {videos.map((video) => (
        <div className="w-full aspect-video" key={video.id}>
          <iframe
            width="1148"
            height="480"
            src={`https://www.youtube.com/embed/${video.key}`}
            title={video.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="w-full h-full object-fill"
          ></iframe>
        </div>
      ))}
    </>
  );
};

export default MovieDetailPage;
