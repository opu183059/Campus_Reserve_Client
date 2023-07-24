/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-reviews")
      .then((res) => res.json())
      .then((result) => {
        setReviews(result);
      });
  }, []);
  //   console.log(reviews);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-center mb-5 font-semibold text-4xl text-sky-700">
        Reviews
      </h1>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className=""
        >
          {reviews &&
            reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="w-96 mx-auto grid justify-center items-center">
                  <div className="rounded-full w-24 h-24 border-4 shadow-md shadow-sky-700 mx-auto overflow-hidden">
                    <img src={review?.photoUrl} alt="" />
                  </div>
                  <h1 className="mt-3 font-semibold">{review?.name}</h1>
                  <p className="text-sky-900 font-semibold mb-2">
                    {review?.collegeName}
                  </p>
                  <p className="text-base italic">'{review?.review}'</p>
                  <p className="italic">{review?.ratings} out of 5</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ReviewsSection;
