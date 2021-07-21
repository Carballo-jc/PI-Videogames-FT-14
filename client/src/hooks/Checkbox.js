import {useState} from 'react'

export const Checkbox = ({ initialState, id, onChange }) => {
  const [checked, setChecked] = useState(initialState);
  console.log(checked)
  const onClick=(checked)=>{
   setChecked(checked);
   onChange(checked);
  }
  return (
    <input
      type="checkbox"
      onClick={e => onClick(e.target.checked)}
      checked={checked}
    />
  );
};
