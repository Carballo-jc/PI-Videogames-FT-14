import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getGamerName } from "../../../actions";
import styles from "./styles.module.css";

const SearchGamer = () => {
  const [searchgamer, setSearchGamer] = useState("");
  // console.log(searchgamer);
  const dispatch = useDispatch();
  const search = () => {
    dispatch(getGamerName(searchgamer));
  };
  const handleSearch = (e) => {
    e.preventDefault();
    search();
  };
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className={styles.input}
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Buscar Juego"
          onChange={(e) => setSearchGamer(e.target.value)}
        />
        <button type="submit" className={styles.btn_search}>
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchGamer;
