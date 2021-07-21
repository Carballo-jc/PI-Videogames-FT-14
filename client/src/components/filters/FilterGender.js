import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { setGenderGamers } from "../../actions";

const FilterGender = () => {
 const genders = useSelector(state => state.gamergender)
     const [gender,setGender] = useState('');
     const dispatch = useDispatch();
     const handleFilter = (e) => {
        setGender(e.target.value);
      };
      const getGender = () =>{
        dispatch(setGenderGamers(gender));
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
        {genders?.map(gende =>{
          return(

            <option key={gende.i} value={gende.name}>{gende.name}</option>
          )
        })}
      </select>
    </div>
  );
};

export default FilterGender;
