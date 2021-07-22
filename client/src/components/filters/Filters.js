import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrder } from "../../actions/index";
import styles from './styles.module.css'

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
        
        className={styles.filter_select}
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
