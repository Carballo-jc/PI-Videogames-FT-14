import React,{useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import { getGendersGamer } from "../../actions";

const FilterGender = () => {
     const [gender,setGender] = useState('');
     const dispatch = useDispatch();
     const handleFilter = (e) => {
        setGender(e.target.value);
      };
      const getGender = () =>{
        dispatch(getGendersGamer(gender));
      }
      useEffect(() => {
      getGender()
      }, [getGender])
  return (
    <div>
      <select
        style={{ width: 120 }}
        name="filter"
        onChange={(e) => handleFilter(e)}
      >
        <option value="ACTION">Action</option>
        <option value="AVENTURA">Aventura</option>
      </select>
    </div>
  );
};

export default FilterGender;
