import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const GamerCard = ({ gamer }) => {
  const { id,name, background_image, released, rating, platforms} = gamer;
  return (
    <div className={styles.card}>
      <img src={background_image} alt={name} />
      <h2>{name}</h2>
      <div>
        <p>Fecha:{released}</p>
        <span>Raiting:{rating}</span>
          <span> Consolas:{platforms}</span>
      </div>
      <Link to={`/videogame/${id}`}>Leers mas...</Link>
    </div>
  );
};

export default GamerCard;
