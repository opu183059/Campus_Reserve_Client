import Banner from "./Banner";
import Gallery from "./Gallery";
import PopularColleges from "./PopularColleges";
import ResearchPaper from "./ResearchPaper";
import ReviewsSection from "./ReviewsSection";
import Search from "./Search";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <Search></Search>
      <Gallery></Gallery>
      <PopularColleges></PopularColleges>
      <ResearchPaper></ResearchPaper>
      <ReviewsSection></ReviewsSection>
    </div>
  );
};

export default Home;
