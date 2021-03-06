import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setGamerOrigin } from "../../actions";
import styles from './styles.module.css'

const FilterOrigin = () => {
  const [origin, setOrigin] = useState("");
  const dispatch = useDispatch();
  const handleFilter = (e) => {
    setOrigin(e.target.value);
  };
  const getOrigin = () => {
    dispatch(setGamerOrigin(origin));
  };
  useEffect(() => {
    getOrigin();
  }, [getOrigin]);

  return (
    <form>
      <select
        className={styles.filter_select}
        name="filter"
        onChange={(e) => handleFilter(e)}
      >
        <option value="ALL">ALL</option>
        <option value="API">API</option>
        <option value="DB">DB</option>
      </select>
    </form>
  );
};

export default FilterOrigin;
