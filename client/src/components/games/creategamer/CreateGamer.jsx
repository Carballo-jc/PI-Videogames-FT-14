import React,{useState} from "react";
import create from "../../../assets/images/2.jpg";
import { useForm } from "../../../hooks/useForm";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postGamer } from "../../../actions";
import styled from "styled-components";

const Error = styled.div`
background-color: red;
color:white;
padding:1rem;
width:100%;
text-align:center;


`;
const CreateGamer = (props) => {
const genders = useSelector(state => state.gamergender);
const dispatch = useDispatch();
const [error, setError] = useState(false)
  const [formValues, handleInputChange] = useForm({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: "",
    background_image: "",
    genres:[]
  });
  const { name, description, released, rating, platforms, background_image } = formValues;
//   useEffect(() => {
// dispatch(getGendersGamer())
// }, [dispatch]);
  const createGamer = () => {
    dispatch(postGamer(formValues));
  };
  const handleCreate = (e) => {
    e.preventDefault();
    createGamer();
    props.history.push('/videogames')
  };
  return (
    <div className={styles.container}>
        <img className={styles.img} src={create} alt="" />
      <div>
        <div>
          <h3 className={styles.title}>Create Gamer!</h3>
          <form onSubmit={handleCreate}>
            {error ? <Error>Todos los campos son Obligatorios</Error> :null}
            <div className={styles.content_items}>
              <div className={styles.form_group}>
                <label>Nombre del Juego</label>
                <input
                  type="text"
                  className={styles.input_search}
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.form_group}>
                <textarea
                  name="description"
                  rows="5"
                  cols="10"
                  value={description}
                  onChange={handleInputChange}
                  required
                >
                  Agregue una descrepci??n
                </textarea>
              </div>
            
              <div className={styles.form_radio}>
                {
                  genders.map((gender) =>{
                    return(
                     <div key={gender.id} >  
                      <label >{gender.name}</label>
                      <input type='checkbox'  name='genres' value={gender.name} onChange={handleInputChange} multiple />
                    
                     </div>
                    )
                  })
                }
              </div>
              <div className={styles.form_group}>
                <label>Plataforma</label>
                <input
                  type="text"
                  className={styles.input_search}
                  name="platforms"
                  value={platforms}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className={styles.form_group}>
                <label>Agregue una imagen:</label>
                <input
                  type="url"
                  className={styles.input_search}
                  name="background_image"
                  value={background_image}
                  onChange={handleInputChange}
                  required
                />
              </div>
            
            <div className={styles.form_group}>
              <label>Fecha de lanzamiento:</label>
              <input
                type="date"
                name="released"
                className={styles.input_search}
                value={released}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.form_group}>
              <label>Raiting</label>
              <input
                className={styles.input_search}
                type="number"
                name="rating"
                value={rating}
                onChange={handleInputChange}
                required
              />
            </div>
            </div>
            <div>
              <button className={styles.btn_create} type="submit">Create Gamer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateGamer;
