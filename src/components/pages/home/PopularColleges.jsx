import { useContext } from "react";
import { Authcontext } from "../../provider/Authprovider";
import CollegesCard from "../colleges/CollegesCard";

const PopularColleges = () => {
  const { coleges } = useContext(Authcontext);
  // console.log(coleges.slice(0, 3));
  return (
    <div className="pb-10">
      <h1 className="text-center mb-5 font-semibold text-4xl text-sky-700">
        Popular colleges
      </h1>
      <div className="grid gap-4 md:gap-0 grid-cols-1 md:grid-cols-3  md:max-w-6xl md:mx-auto justify-items-center">
        {coleges.slice(0, 3).map((collegedata) => (
          <CollegesCard
            collegedata={collegedata}
            key={collegedata.college_id}
          ></CollegesCard>
        ))}
      </div>
    </div>
  );
};

export default PopularColleges;
