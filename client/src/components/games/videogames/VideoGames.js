import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGamers } from "../../../actions";
import styles from "./styles.module.css";
import GamerCard from "../gamerCard/GamerCard";
import Loading from "../loading/Loading";

export const VideoGames = () => {
  const gamers_state = useSelector((state) => state.videogames);
  const dispatch = useDispatch();

  if (gamers_state.length === 0) {
    dispatch(getGamers());
  }
  // useEffect(() => {}, [gamers_state]);
  // const memoGamer = useMemo(() => dispatch(getGamers()),  [gamers_state]);

  return (
    <>
      <div className={styles.content_cards}>
        {gamers_state.length === 0 ? (
          <Loading />
        ) : (
          gamers_state.map((gamer) => (
            <GamerCard key={gamer.id} gamer={gamer} />
          ))
        )}
      </div>
    </>
  );
};;;
