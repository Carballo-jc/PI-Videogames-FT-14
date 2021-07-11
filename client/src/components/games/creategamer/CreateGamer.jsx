import React from "react";
import create from "../../../assets/images/2.jpg";
import { useForm } from "../../../hooks/useForm";
import styles from "./styles.module.css";

const CreateGamer = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    description: "",
    date: "",
    rating: "",
  });
  const { name, description, date, rating } = formValues;
  console.log(formValues);
  const handleCreate = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <div className={styles.content_items}>
        <img className={styles.img} src={create} alt="" />
        <div>
          <h3 className={styles.title}>Create Gamer!</h3>
          <form onSubmit={handleCreate}>
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
            </div>
            <div className={styles.form_group}>
              <label>Fecha de lanzamiento:</label>
              <input
                type="date"
                name="date"
                value={date}
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
