import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGamerDetail } from "../../../actions";

const GamerDetails = () => {
  const gamer = useSelector((state) => state.onegamer);
  console.log(gamer);
  const { name, background_image, rating, released, platforms, description } =
    gamer;
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGamerDetail(Number(id)));
  }, [dispatch]);

  return (
    <div>
      <h2>{name}</h2>
      <img src={background_image} alt="" style={{ maxWidth: 300 }} />
      <p>Fecha:{released}</p>
      <p>Raiting:{rating}</p>
      <span>{description}</span>
    </div>
  );
};

export default GamerDetails;
