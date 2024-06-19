import Banner from "../components/banner/Banner";
import MovieSwiper from "../components/movie/MovieSwiper";

const HomePage = () => {
  return (
    <>
      <Banner></Banner>
      <section className="page-container text-white">
        <p className="capitalize pt-8 pb-4 text-2xl font-semibold ">
          Now playing
        </p>
        <MovieSwiper path="now_playing"></MovieSwiper>
      </section>
      <section className="page-container text-white">
        <p className="capitalize text-2xl font-semibold pt-8 pb-4">Top rated</p>
        <MovieSwiper path="top_rated"></MovieSwiper>
      </section>
      <section className="page-container text-white">
        <p className="capitalize text-2xl font-semibold pt-8 pb-4">Trending</p>
        <MovieSwiper path="popular"></MovieSwiper>
      </section>
    </>
  );
};

export default HomePage;
