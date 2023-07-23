const SearchCard = () => {
  return (
    <div className="flex w-9/12 mx-auto relative group">
      <div className="w-5/12 overflow-hidden rounded-l-xl  border-2 border-sky-700 border-r-0">
        <img
          src="https://www.entiretest.com/wp-content/uploads/2013/03/Chittagong-Medical-College-Bangladesh.jpg"
          alt=""
          className="group-hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="w-7/12 border-2 rounded-r-xl border-sky-700 border-l-0 pl-4  font-medium">
        <h1 className="mt-2 text-3xl font-semibold text-sky-800 mb-3">
          ABC international college
          <span className="text-sm ml-1">(Since 1998)</span>
        </h1>

        <p>
          Admission Date:{" "}
          <span className="bg-yellow-400 text-slate-700 rounded-lg animate-bounce inline-block px-2 py-1">
            2023-09-01
          </span>
        </p>
        <p className="mb-2">Process: Online application and entrance exam</p>
        <p>
          Research History: Have 3 years of experience and 18 published research
        </p>
        <p>Research Topic: Electromecanics</p>
        <p>Sports: Indore, Outdore, Intenational</p>
        <p>Events: Freshers Party, Science Fair, Annual Sports Day</p>
        <div className="absolute bottom-3 right-3">
          <button className="px-3 py-1 bg-sky-500 rounded-md text-white">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
