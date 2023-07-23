import { useContext } from "react";
import CollegesCard from "./CollegesCard";
import { Authcontext } from "../../provider/Authprovider";

const Colleges = () => {
  const { coleges } = useContext(Authcontext);

  return (
    <div className="min-h-screen pt-20">
      <h1 className="text-center mb-5 font-semibold text-4xl text-sky-700">
        Colleges Around the country
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center w-10/12 mx-auto">
        {coleges.map((collegedata) => (
          <CollegesCard
            collegedata={collegedata}
            key={collegedata.college_id}
          ></CollegesCard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
