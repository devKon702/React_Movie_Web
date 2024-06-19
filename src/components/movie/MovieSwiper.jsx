import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch";

const MovieSwiper = ({ path }) => {
  const [movies, setMovies] = useState([]);
  const { data } = useFetch(path);

  useEffect(() => {
    if (data) setMovies(data.results);
  }, [data]);

  return (
    <div className="movie-swiper">
      <Swiper grabCursor={true} spaceBetween={20} slidesPerView={"auto"}>
        {movies.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard item={item}></MovieCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieSwiper.propTypes = {
  path: PropTypes.string.isRequired,
};

export default MovieSwiper;
