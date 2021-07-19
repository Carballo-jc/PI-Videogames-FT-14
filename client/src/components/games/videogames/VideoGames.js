import React, {useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGamers } from "../../../actions";
import styles from "./styles.module.css";
import GamerCard from "../gamerCard/GamerCard";
import Loading from "../loading/Loading";
import Paginate from '../paginate/Paginate'

export const VideoGames = () => {
  const gamers = useSelector((state) => state.gamerViews);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(20);
  const dispatch = useDispatch();

  let totalPages = Math.ceil(gamers.length / 20);
  let pages = [];
  for (let index = 1; index <= totalPages; index++) {
    pages.push(index);
  }

  const handleClick = (e) => {
    e.preventDefault();
    setMin((e.target.id - 1) * 20);
    setMax(e.target.id * 20);
  };

  useEffect(() => {
    if (gamers?.length === 0) {
      dispatch(getGamers());
    }
  },[gamers,dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.content_cards}>
        {gamers?.length === 0 ? (
          <Loading />
        ) : (
          gamers?.map((gamer) =>
           <GamerCard key={gamer.id} gamer={gamer} />).slice(min, max)
        )}
      </div>
      <Paginate pages={pages} handleClick={handleClick} />
    </div>
  );
};;;
