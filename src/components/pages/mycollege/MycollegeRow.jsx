import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const MycollegeRow = ({ bookedCollege }) => {
  // console.log(bookedCollege);
  const {
    collegeAddress,
    collegeName,
    college_image,
    name,
    email,
    mobile,
    subject,
    dateOfBirth,
    address,
    photoUrl,
  } = bookedCollege || {};

  const Review = (event) => {
    event.preventDefault();
    const form = event.target;
    const rating = form.rating.value;
    const ratings = parseInt(rating);
    const review = form.review.value;
    const reviewData = {
      collegeName,
      name,
      email,
      review,
      ratings,
      photoUrl,
    };
    console.log(reviewData);
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          form.reset();
          Swal.fire({
            icon: "success",
            title: "Review Added",
            text: "Your review is successfuly added",
          });
        }
      });
  };

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
          <h1 className="font-semibold text-sky-900 text-2xl">{collegeName}</h1>
          <p>{collegeAddress}</p>
          <form action="" onSubmit={Review} noValidate="" className="mt-3">
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
      <p className="mt-5 font-semibold text-xl">Applicant Details:</p>
      <div className="flex shadow-md mt-4 gap-5 bg-sky-100/80 p-5 rounded-lg">
        <div className="">
          <img src={photoUrl} alt="" className="w-[70px] h-[70px] rounded-md" />
        </div>
        <div className="flex gap-20 font-semibold">
          <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Address: {address}</p>
          </div>
          <div>
            <p>Mobile: {mobile}</p>
            <p>Birthday: {dateOfBirth}</p>
            <p>Subject: {subject}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MycollegeRow;
