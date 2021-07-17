import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getOrder, getGendersGamer } from "../../actions/index";

const Filters = () => {
  const [filter, setFilter] = useState("");
  // console.log(filter);
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  const dispatch = useDispatch();
  const gamerOder = (e) => {
    e.preventDefault();
    dispatch(getOrder(filter));
  };
  // dispatch(getGendersGamer("action",));
  return (
    <form onSubmit={gamerOder}>
      <select
        style={{ width: 100 }}
        name="filter"
        onChange={(e) => handleFilter(e)}
      >
        <option>--Oder Alfabetico--</option>
        <option value="A-Z">Orden A-Z</option>
        <option value="action">genero</option>
        <option value="Z-A">Orden Z-A</option>
      </select>
      <button type="submit" className="">
        Ordenar
      </button>
    </form>
  );
};

export default Filters;
