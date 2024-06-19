import PropTypes from "prop-types";

const BannerItem = ({ item: { title, poster_path } }) => {
  return (
    <div className="h-full bg-white rounded-lg relative">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)]"></div>

      <div className="absolute bottom-5 left-5 text-white">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <div className="flex items-center gap-6 mb-8">
          <span className="px-4 py-2 border-2 border-white rounded-lg">
            Adventure
          </span>
          <span className="px-4 py-2 border-2 border-white rounded-lg">
            Action
          </span>
          <span className="px-4 py-2 border-2 border-white rounded-lg">
            Fantasy
          </span>
        </div>
        <button className="bg-primary font-bold px-6 py-2 rounded-lg min-w-[100px]">
          Watch Now
        </button>
      </div>
    </div>
  );
};

BannerItem.propTypes = {
  item: PropTypes.object.isRequired,
  title: PropTypes.string,
  poster_path: PropTypes.string,
};

export default BannerItem;
