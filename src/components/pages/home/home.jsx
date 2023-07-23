import Banner from "./Banner";
import Gallery from "./Gallery";
import Search from "./Search";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <Search></Search>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
