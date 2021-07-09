import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getGamers } from "../../../actions";
import styles from "./styles.module.css";
import GamerCard from "../cardvideogames/GamerCard";

export const VideoGames = () => {
  const gamers_state = useSelector((state) => state.videogames);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGamers());
  }, []);

  return (
    <div className={styles.content_cards}>
      {gamers_state
        ? gamers_state.map((gamer) => (
            <GamerCard key={gamer.id} gamer={gamer} />
          ))
        : null}

      <button className={styles.btn_ingresar}>
        <Link to={"/"} className={styles.link_inicio}>
          Inicio
        </Link>
      </button>
    </div>
  );
};