import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getGamerName } from "../../../actions";

const SearchGamer = () => {
  const [searchgamer, setSearchGamer] = useState("");
  // console.log(searchgamer);
  const dispatch = useDispatch();
  const search = () => {
    dispatch(getGamerName(searchgamer));
  };
  const handleSearch = (e) => {
    e.preventDefault();
    // console.log("se presiono");
    search();
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Buscar Juego"
          onChange={(e) => setSearchGamer(e.target.value)}
        />
        <button type="submit" className="">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchGamer;
