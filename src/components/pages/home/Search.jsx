/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import SearchCard from "./SearchCard";

const Search = () => {
  useEffect(() => {
    fetch("/src/assets/college.json")
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
      });
  }, []);
  return (
    <div className="py-10">
      <SearchCard></SearchCard>
    </div>
  );
};

export default Search;
