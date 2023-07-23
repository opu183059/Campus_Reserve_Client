import { useLoaderData } from "react-router-dom";

const CollegeInformation = () => {
  const collegedata = useLoaderData();

  const {
    college_id,
    college_image,
    college_name,
    address,
    established,
    rating,
    admission_date,
    admission_process,
    events,
    research_history,
    research_work,
    years_of_researching,
    publication_number,
    sports_category,
  } = collegedata || {};
  return (
    <div className="min-h-screen py-20">
      <h1 className="text-center font-semibold text-3xl text-sky-800">
        {college_name}
      </h1>
      <div className="flex justify-center mt-6">
        <img src={college_image} alt="" className="rounded-xl w-7/12 h-80" />
      </div>
      <div className="information flex justify-center w-10/12 mx-auto mt-6">
        <div className="left w-8/12 text-base">
          <p className="font-semibold text-xl">{college_name}</p>
          <p className="font-semibold">{address}</p>
          <p className="font-semibold">College ID: {college_id}</p>

          <p className="mt-6 mb-1 font-semibold">
            Admission Date:
            <span className="text-base ml-1 px-2 py-1 bg-red-500 rounded-lg text-white">
              {admission_date}
            </span>
          </p>
          <p className="font-semibold">
            Admission Process: {admission_process}
          </p>
          <p className="font-semibold mt-5">Events By the college:</p>
          <p>{events}</p>
          <p className="font-semibold ">Active Sports category:</p>
          <p>{sports_category}</p>
        </div>
        <div className="right w-5/12">
          <p className="font-semibold">
            Established in: Year
            <span className="font-bold text-xl ml-1 text-sky-800">
              {established}
            </span>
          </p>
          <p className="font-semibold">
            College Ratings:
            <span className="font-bold ml-1 text-amber-700">{rating}</span> out
            of 5
          </p>

          {research_history && (
            <>
              <p className="mt-12 font-semibold"> Research History: </p>
              <p>
                This College has {years_of_researching} years of Research
                experiences and have nearly {publication_number} publications
                published
              </p>
              <p className="mt-2 font-semibold">Research Topics:</p>
              <p>{research_work}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegeInformation;
