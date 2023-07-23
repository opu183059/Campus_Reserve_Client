const SearchCard = ({ clgData }) => {
  const {
    _id,
    college_image,
    college_name,
    established,
    admission_date,
    admission_process,
    events,
    research_work,
    years_of_researching,
    publication_number,
    sports_category,
  } = clgData || {};
  return (
    <div className="flex w-9/12 mx-auto relative group">
      <div className="w-5/12 overflow-hidden rounded-l-xl  border-2 border-sky-700 border-r-0">
        <img
          src={college_image}
          alt=""
          className="group-hover:scale-110 transition-all duration-500 w-full h-full"
        />
      </div>
      <div className="w-7/12 border-2 rounded-r-xl border-sky-700 border-l-0 pl-4  font-medium">
        <h1 className="mt-2 text-3xl font-semibold text-sky-800 mb-3">
          {college_name}
          <span className="text-sm ml-1">(Since {established})</span>
        </h1>

        <p>
          Admission Date:
          <span className="ml-1 bg-yellow-400 text-slate-700 rounded-lg animate-bounce inline-block px-2 py-1">
            {admission_date}
          </span>
        </p>
        <p className="mb-2">{admission_process}</p>
        <p>
          Research History: Have {years_of_researching} years of experience and{" "}
          {publication_number} published research
        </p>
        <p>Research Topic: {research_work}</p>
        <p>Sports: {sports_category}</p>
        <p>Events: {events}</p>
        <div className="my-2">
          <button className="px-3 py-1 bg-sky-500 rounded-md text-white">
            See College Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
