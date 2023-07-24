import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CollegesCard = ({ collegedata }) => {
  const {
    college_image,
    college_name,
    address,
    established,
    rating,
    admission_date,
    _id,
    publication_number,
  } = collegedata || {};
  return (
    <div className="w-11/12 rounded-lg p-3 border-[1px] border-sky-600 group shadow-md hover:shadow-lg">
      <div className="flex gap-3 pb-2">
        <div className="w-6/12 overflow-hidden rounded-lg">
          <img
            src={college_image}
            alt=""
            className="w-56 h-36 group-hover:scale-110 transition-all duration-500"
          />
        </div>
        <div className="right relative">
          <p>Admission Date: </p>
          <p className="text-amber-700 text-xl mb-1 font-bold">
            {admission_date}
          </p>
          <p>Published Researches: {publication_number}</p>
          <p>
            Ratings:
            <span className="text-amber-700 text-xl font-bold ml-1">
              {rating}
            </span>{" "}
            out of 5
          </p>
          <Link to={`/college-information/${_id}`}>
            <button
              onClick={() => {
                console.log("clicked");
              }}
              className="absolute -bottom-3 px-3 py-1 my-3 bg-sky-500 rounded-md text-white"
            >
              See College Details
            </button>
          </Link>
        </div>
      </div>
      <div className="details text-center pt-2">
        <hr />
        <h1 className="mt-2 text-3xl font-semibold text-sky-800">
          {college_name}
        </h1>
        <p className="text-sm text-sky-800 font-semibold">
          {address} (Since {established})
        </p>
      </div>
    </div>
  );
};

export default CollegesCard;
