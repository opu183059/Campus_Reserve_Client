const CollegesCard = () => {
  return (
    <div className="w-11/12 rounded-lg p-3 border-[1px] border-sky-600 group">
      <div className="flex gap-3 ">
        <div className="w-6/12 overflow-hidden rounded-lg">
          <img
            src="https://www.entiretest.com/wp-content/uploads/2013/03/Chittagong-Medical-College-Bangladesh.jpg"
            alt=""
            className="w-full group-hover:scale-110 transition-all duration-500"
          />
        </div>
        <div className="right relative">
          <p>Admission Date: </p>
          <p className="text-amber-700 text-xl mb-2 font-bold">2023-09-01</p>

          <p>Published Researches: 8</p>
          <p>
            College Ratings:{" "}
            <span className="text-amber-700 text-xl font-bold">5</span> out of 5
          </p>

          <button className="absolute -bottom-3 px-3 py-1 my-3 bg-sky-500 rounded-md text-white">
            See College Details
          </button>
        </div>
      </div>
      <div className="details text-center pt-2">
        <hr />
        <h1 className="mt-2 text-3xl font-semibold text-sky-800">
          ABC international college
        </h1>
        <p className="text-sm text-sky-800 font-semibold">(Since 1998)</p>

        <p className="mb-2">Online application and entrance exam</p>
      </div>
    </div>
  );
};

export default CollegesCard;
