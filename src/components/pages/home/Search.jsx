/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import SearchCard from "./SearchCard";
import { Authcontext } from "../../provider/Authprovider";

const Search = () => {
  const { searchCollege, search, setSearch, setNoDataMessage } =
    useContext(Authcontext);

  return (
    <div className="py-10 grid gap-5">
      {searchCollege?.map((clgData) => (
        <SearchCard clgData={clgData} key={clgData._id}></SearchCard>
      ))}
    </div>
  );
};

export default Search;
