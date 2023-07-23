import { useContext } from "react";
import { Authcontext } from "../../provider/Authprovider";

/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  const { setSearchCollege, search, setSearch, setNoDataMessage } =
    useContext(Authcontext);

  const handleSearch = () => {
    console.log(search);
    fetch(`http://localhost:5000/searchCollege/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchCollege(data);
        if (data.length == 0) {
          setNoDataMessage("No data found, Please try again");
        } else {
          setNoDataMessage(" ");
        }
      });
    scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };
  return (
    <div className="pt-5">
      <div className="hero h-screen bg-[url('https://live.staticflickr.com/1556/25084174110_92f7098c7b_b.jpg')] bg-auto bg-fixed md:bg-cover">
        <div className="bg-black/50 w-full hero h-screen">
          <div className="text-center text-sky-100">
            <div className="flex justify-center mb-3">
              <img
                src="https://i0.wp.com/www.charlestonsouthern.edu/wp-content/uploads/AF-Symbol.jpg?resize=1024%2C913&ssl=1"
                alt=""
                className="w-20 p-2 bg-white rounded-full shadow-md shadow-sky-600"
              />
            </div>
            <h1
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="text-5xl font-semibold mb-4"
            >
              Discover Your Ideal College Campus
            </h1>

            <p
              data-aos="zoom-in"
              data-aos-duration="1800"
              className="w-9/12 mx-auto backdrop-blur-[2px]"
            >
              Are you looking for the perfect venue to host your college events,
              seminars, workshops, or conferences? Look no further! Our College
              Booking web application brings you a seamless platform to discover
              and book the ideal venues on campuses across the nation.{" "}
            </p>
            <div className="mt-5">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search College"
                className="bg-transparent border-[2px] w-4/12 px-3 py-1 border-sky-500 rounded-l-md"
              />
              <button
                onClick={handleSearch}
                className="bg-sky-500 text-white uppercase px-3 py-1 border-[2px] border-sky-500 rounded-r-md focus:outline-none"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
