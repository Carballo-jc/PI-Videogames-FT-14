import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { setGenderGamers } from "../../actions";
import styles from './styles.module.css'

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
    

      useEffect(() => {
          getGender()
      }, [getGender,gender])
  return (
    <div>
      <select
        className={styles.filter_select}
        name="filter"
        onChange={(e) => handleFilter(e)}
      >
        {genders?.map((gende,id) =>{
          return(

            <option key={id} value={gende.name}>{gende.name}</option>
          )
        })}
      </select>
    </div>
  );
};

export default FilterGender;
