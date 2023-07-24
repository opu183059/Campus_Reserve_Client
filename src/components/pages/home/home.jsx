import Banner from "./Banner";
import Gallery from "./Gallery";
import ReviewsSection from "./ReviewsSection";
import Search from "./Search";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <Search></Search>
      <Gallery></Gallery>
      <ReviewsSection></ReviewsSection>
    </div>
  );
};

export default Home;
