import { useEffect, useState } from "react";
import CollegesCard from "./CollegesCard";

const Colleges = () => {
  const [coleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("/src/assets/college.json")
      .then((res) => res.json())
      .then((result) => {
        setColleges(result);
      });
  }, []);
  console.log(coleges);
  return (
    <div className="min-h-screen pt-20">
      <h1 className="text-center mb-5 font-semibold text-4xl text-sky-700">
        Colleges Around the country
      </h1>
      <div className="grid grid-cols-2 gap-8 justify-center w-10/12 mx-auto">
        {coleges.map(() => (
          <CollegesCard></CollegesCard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
