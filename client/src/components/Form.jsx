import React, { useState } from "react";

const continents = [
  {
    id: "Africa",
    name: "Africa",
  },
  {
    id: "Asia",
    name: "Asia",
  },
  {
    id: "Americas",
    name: "Americas",
  },
  {
    id: "Europe",
    name: "Europe",
  },
  {
    id: "Oceania",
    name: "Oceania",
  },
];
export default function Filters(props) {
  const [checked, setChecked] = useState({ continent: [] });
  const [filters, setFilters] = useState({
    orderBy: "",
    name: "",
    order: "",
    page: 0,
  });
  const { orderBy, name } = filters;
  function handleOnChange(e) {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(filters);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {continents.map((x) => {
          return (
            <label key={x.id}>
              <input
                type="checkbox"
                value={x.name}
                name={checked.continent}
                onChange={(e) => setChecked(e.target.name)}
              ></input>
              <span>{x.name}</span>
            </label>
          );
        })}

        <div>
          <select onChange={handleOnChange} value={filters.name}>
            <option value="name" name="name" onChange={handleOnChange}>
              By name
            </option>
            <option value={orderBy} name="orderBy">
              By population
            </option>
          </select>
        </div>
        <div>
          <select>
            <option name="order" value="ASC">
              Asc
            </option>
            <option name="order" value="DESC">
              Desc
            </option>
          </select>
        </div>
        <button type="submit">Search </button>
        <div>
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
      </form>
    </div>
  );
}
