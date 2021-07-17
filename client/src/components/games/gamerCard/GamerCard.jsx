import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const GamerCard = ({ gamer }) => {
  const { id, name, background_image, genres } = gamer;
  return (
    <div>
      <div className={styles.card}>
        <img src={background_image} alt={name} />
        <h2>{name}</h2>
        <p>
          Genero:
          {genres?.map((gender) => (
            <span key={gender.id}>{gender},</span>
          ))}
        </p>
        <Link to={`/videogame/${id}`}>Leers mas...</Link>
      </div>
    </div>
  );
};

export default GamerCard;
