import React,{useEffect,useState} from "react";
import create from "../../../assets/images/2.jpg";
import { useForm } from "../../../hooks/useForm";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postGamer,getGendersGamer } from "../../../actions";
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
useEffect(() => {
dispatch(getGendersGamer())
}, [getGendersGamer]);
const [error, setError] = useState(false)
  const [formValues, handleInputChange] = useForm({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: "",
    background_image: "",
    genres:''
  });
  const { name, description, released, rating, platforms, background_image,genres } = formValues;
  const dispatch = useDispatch();
  const createGamer = () => {
    console.log(formValues);
    dispatch(postGamer(formValues));
  };
  const handleCreate = (e) => {
    e.preventDefault();
    createGamer();
    props.history.push('/videogames')
  };
  return (
    <div className={styles.container}>
      <div className={styles.content_items}>
        <img className={styles.img} src={create} alt="" />
        <div>
          <h3 className={styles.title}>Create Gamer!</h3>
          <form onSubmit={handleCreate}>
            {error ? <Error>Todos los campos son Obligatorios</Error> :null}
            <div>
              <div className={styles.form_group}>
                <label>Nombre del Juego</label>
                <input
                  type="text"
                  className={styles.input_search}
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.form_group}>
                <textarea
                  name="description"
                  rows="10"
                  cols="30"
                  value={description}
                  onChange={handleInputChange}
                >
                  Agregue una descrepción
                </textarea>
              </div>
              <div className={styles.form_group}>
                <label htmlFor="">Genero:</label>
                <select name='genres'  onChange={handleInputChange}>
                 {
                   genders?.map( gender =>{
                     return(
                       <option  value={gender.name} key={gender.id}>{gender.name}</option>
                     )
                   })
                 }
                </select>
              </div>
              <div className={styles.form_group}>
                <label>Plataforma</label>
                <input
                  type="text"
                  className={styles.input_search}
                  name="platforms"
                  value={platforms}
                  onChange={handleInputChange}
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
                />
              </div>
            </div>
            <div className={styles.form_group}>
              <label>Fecha de lanzamiento:</label>
              <input
                type="date"
                name="released"
                value={released}
                onChange={handleInputChange}
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
              />
            </div>
            <div className="mb-6 text-center">
              <button type="submit">Create Gamer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateGamer;
