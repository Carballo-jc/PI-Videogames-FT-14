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
        if(gender !== ''){
          dispatch(setGenderGamers(gender));
        }
      }
      // if(gender.length === 0){
      //   getGender()

      // }
      useEffect(() => {
          getGender()
      }, [getGender,gender])
  return (
    <div>
      <select
        style={{ width: 120 }}
        name="filter"
        onChange={(e) => handleFilter(e)}
      >
        {genders?.map((gende,i) =>{
          return(

            <option key={i} value={gende.name}>{gende.name}</option>
          )
        })}
      </select>
    </div>
  );
};

export default FilterGender;
