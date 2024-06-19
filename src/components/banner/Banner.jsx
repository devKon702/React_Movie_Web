import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import BannerItem from "./BannerItem";
import useFetch from "../../hooks/useFetch";

const Banner = () => {
  const { data } = useFetch("upcoming");
  let movies = data?.results || [];
  return (
    <div className="banner page-container overflow-hidden mb-12 rounded-lg">
      <Swiper className="h-[400px]" slidesPerView={"1"}>
        {movies.map((item) => (
          <SwiperSlide key={item.id}>
            <BannerItem item={item}></BannerItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
