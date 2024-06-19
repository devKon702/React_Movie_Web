import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../../hooks/useFetch";
import PropTypes from "prop-types";

const CastSwiper = ({ movieId, limit = 10 }) => {
  const { data } = useFetch(`${movieId}/credits`);
  const casts = data?.cast?.slice(0, limit) || [];
  if (!data) return <></>;
  return (
    <Swiper spaceBetween={20} slidesPerView={4}>
      {casts.map((cast) => (
        <SwiperSlide key={cast.id}>
          <div className="w-full h-300px relative select-none">
            <img
              src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
              alt=""
              className="object-cover w-full h-full rounded-md"
            />
            <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0)]"></div>
            <span className="absolute bottom-0 font-bold p-2">{cast.name}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

CastSwiper.propTypes = {
  movieId: PropTypes.number,
  limit: PropTypes.number,
};

export default CastSwiper;
