import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const GamerCard = ({ gamer }) => {
  const { id, name, background_image, genres } = gamer;
  return (
      <div className={styles.card}>
        <img src={background_image} alt={name} />
        <h2>{name}</h2>
        <div>
          Genero:
          {genres?.map((gender,idx) => (
            <span key={idx}>{gender},</span>
          ))}
        </div>
        <Link to={`/videogame/${id}`}>Leers mas...</Link>
      </div>
  );
};

export default GamerCard;
