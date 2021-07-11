import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGamers } from "../../../actions";
import styles from "./styles.module.css";
import GamerCard from "../cardvideogames/GamerCard";

export const VideoGames = () => {
  const gamers_state = useSelector((state) => state.videogames);
  // console.log(gamers_state)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGamers());
  }, []);


  return (
    <>
          <div className={styles.content_cards}>
            
            {gamers_state
              ? gamers_state.map((gamer) => (
                  <GamerCard key={gamer.id} gamer={gamer} />
                ))
              : 'sus datos estan siendo cargados'}
          </div>
    </>
  );
};
