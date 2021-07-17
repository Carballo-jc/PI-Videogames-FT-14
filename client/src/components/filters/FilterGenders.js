import React from "react";

const FilterGenders = () => {
  return (
    <form>
      <select
        style={{ width: 100 }}
        name="filter"
        // onChange={(e) => handleFilter(e)}
      >
        {}
      </select>
      <button type="submit" className="">
        Ordenar
      </button>
    </form>
  );
};

export default FilterGenders;
