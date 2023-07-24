import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../provider/Authprovider";
import MycollegeRow from "./MycollegeRow";

const Mycollege = () => {
  const { user } = useContext(Authcontext);
  //   console.log(user);
  const [myBookings, setMyBookings] = useState();

  useEffect(() => {
    fetch(
      `https://campus-reserve-server-gamma.vercel.app/myBookings/${user?.email}`
    )
      .then((res) => res.json())
      .then((result) => {
        setMyBookings(result);
      });
  }, []);
  // console.log(myBookings);
  return (
    <div className="min-h-screen pt-20">
      <h1 className="text-center mb-5 font-semibold text-xl md:text-3xl text-sky-700">
        My Booked Colleges
      </h1>

      <div className="max-w-5xl mx-auto mt-6">
        {myBookings && Array.isArray(myBookings) && myBookings.length > 0 ? (
          <>
            {myBookings?.map((bookedCollege) => (
              <MycollegeRow
                bookedCollege={bookedCollege}
                key={bookedCollege._id}
              ></MycollegeRow>
            ))}
          </>
        ) : (
          <h1 className="text-red-700 text-center font-semibold text-lg mt-5">
            {myBookings
              ? "No data found, please try again"
              : "No data found please book admission"}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Mycollege;
