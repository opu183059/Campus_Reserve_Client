import { useContext } from "react";
import AdmissionRow from "./AdmissionRow";
import { Authcontext } from "../../provider/Authprovider";

const Admission = () => {
  const { coleges } = useContext(Authcontext);
  return (
    <div className="min-h-screen pt-20">
      <h1 className="text-center mb-5 font-semibold text-4xl text-sky-700">
        Admission page
      </h1>
      <div className="max-w-5xl mx-auto">
        {coleges.map((collegedata) => (
          <AdmissionRow
            collegedata={collegedata}
            key={collegedata.college_id}
          ></AdmissionRow>
        ))}
      </div>
    </div>
  );
};

export default Admission;
