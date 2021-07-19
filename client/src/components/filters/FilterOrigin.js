import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { setGamerOrigin } from "../../actions";

const FilterOrigin = () => {
  const [origin,setOrigin]= useState('');
  console.log(origin)
   const dispatch = useDispatch();
   const handleFilter = (e) => {
    setOrigin(e.target.value);
  };
   const getOrigin= (e) =>{
    e.preventDefault();
     dispatch(setGamerOrigin(origin))
   }

  return (
    <form onSubmit={getOrigin}>
      <select
        style={{ width: 100 }}
        name="filter"
        onChange={(e) => handleFilter(e)}
      >
				<option value='ALL'>ALL</option>
				<option value='API'>API</option>
				<option value='DB'>DB</option>
      </select>
      <button type="submit" className="">
       Origen
      </button>
    </form>
  );
};

export default FilterOrigin;
