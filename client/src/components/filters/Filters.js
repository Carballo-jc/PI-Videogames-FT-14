import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrder, getGendersGamer } from "../../actions/index";

const Filters = () => {
  const [filter, setFilter] = useState("");
  // console.log(filter);
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  const dispatch = useDispatch();
  const gamerOder = () => {
    dispatch(getOrder(filter));
  };
  useEffect(() => {
    gamerOder();
  }, [gamerOder]);
  return (
    <form>
      <select
        style={{ width: 120 }}
        name="filter"
        onChange={(e) => handleFilter(e)}
      >
        <option>Oder Alfabetico</option>
        <option value="A-Z">Orden A-Z</option>
        <option value="Z-A">Orden Z-A</option>
      </select>
    </form>
  );
};

export default Filters;
