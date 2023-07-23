/* eslint-disable react/prop-types */
const MycollegeRow = ({ bookedCollege }) => {
  console.log(bookedCollege);
  const { collegeAddress, collegeName, college_image } = bookedCollege || {};
  return (
    <div className="my-5 shadow-lg p-5 rounded-lg group">
      <div className="flex gap-5">
        <div className="left w-5/12 rounded-l-lg overflow-hidden">
          <img
            src={college_image}
            alt=""
            className="w-full h-64  group-hover:scale-110 transition-all duration-500"
          />
        </div>
        <div className="right w-7/12">
          <h1 className="font-semibold text-xl">{collegeName}</h1>
          <p>{collegeAddress}</p>
          <form
            action=""
            // onSubmit={AdmissionBook}
            noValidate=""
            className="mt-3"
          >
            <fieldset className="grid grid-cols-4 gap-6 rounded-md shadow-sm">
              <div className="grid grid-cols-6 gap-4 col-span-full">
                <div className="col-span-full">
                  <input
                    name="rating"
                    type="number"
                    className="border-2 border-sky-900 w-full px-2 py-1 rounded-sm"
                    placeholder="Add Ratings"
                  />
                </div>
                <div className="col-span-full">
                  <textarea
                    name="review"
                    id=""
                    cols="30"
                    rows="3"
                    placeholder="Write Review"
                    className="border-2 border-sky-900 w-full px-2 py-1 rounded-sm resize-none"
                  ></textarea>
                </div>
                <div className="col-span-full w-full text-left">
                  <input
                    type="submit"
                    value="Add Review"
                    className="px-3 py-1 text-white cursor-pointer bg-sky-500 hover:bg-sky-700 transition-all duration-300 rounded uppercase "
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MycollegeRow;
