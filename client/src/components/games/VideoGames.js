import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGamers } from "../../actions";

export const VideoGames = () => {
  const gamers_state = useSelector((state) => state.VideoGames);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGamers());
  }, []);
  return (
    <div>
      <h2>mostrar los resultados</h2>
    </div>
  );
};
