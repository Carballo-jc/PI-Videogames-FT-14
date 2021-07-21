import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = (e) => {
    if(e.target.name === 'genres'){
      const array = values[e.target.name]
      setValues({
        ...values,
        [e.target.name]:array.concat(e.target.value) ,
      });
    }else{

      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  return [values, handleInputChange, reset];
};
