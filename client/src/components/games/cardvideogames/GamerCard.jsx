import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const GamerCard = ({ gamer }) => {
  const { name, background_image, released, rating, platforms, slug } = gamer;
  return (
    <div className={styles.card}>
      <img src={background_image} alt={name} />
      <h2>{name}</h2>
      <div>
        <p>Fecha:{released}</p>
        <span>Raiting:{rating}</span>
      </div>
      <div>
        <Link to={`/${slug}`}>Leers mas...</Link>
        Consolas:
        {platforms.map((platfom) => (
          <ul>
            <li>
              <p>{platfom}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default GamerCard;
