import { useContext, useEffect, useState } from "react";
import AdmissionRow from "./AdmissionRow";
import { Authcontext } from "../../provider/Authprovider";

const Admission = () => {
  const { test } = useContext(Authcontext);

  const [admissionColeges, setAdmissionColeges] = useState([]);
  useEffect(() => {
    fetch("/src/assets/college.json")
      .then((res) => res.json())
      .then((result) => {
        setAdmissionColeges(result);
      });
  }, []);
  console.log(test);
  return (
    <div className="min-h-screen pt-20">
      <h1 className="text-center mb-5 font-semibold text-4xl text-sky-700">
        Admission page
      </h1>
      <div className="max-w-6xl mx-auto">
        {admissionColeges.map((collegedata) => (
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
