import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AdmissionRow = ({ collegedata }) => {
  const { _id, college_image, address, college_name, established } =
    collegedata || {};
  return (
    <Link
      to={`/admission-book/${_id}`}
      className="p-5 rounded-md shadow-md my-5 flex gap-5 cursor-pointer hover:shadow-sky-200 hover:bg-sky-50 hover:scale-105 transition-all duration-200"
    >
      <img src={college_image} alt="" className="w-14 rounded-md" />
      <div>
        <h1 className="font-semibold text-sky-950">
          {college_name}, <span className="">(Since {established})</span>
        </h1>
        <p className="text-sm font-semibold text-gray-500">
          {address}{" "}
          <span className="font-bold text-lg ml-1 animate-pulse text-sky-950">
            ➔
          </span>
        </p>
      </div>
    </Link>
  );
};

export default AdmissionRow;
