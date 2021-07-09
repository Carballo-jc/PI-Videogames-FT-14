import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getGamerId } from "../../../actions";

const GamerDetails = () => {
  const gamer = useSelector((state) => state.onegamer);
  console.log(gamer);
  const dispatch = useDispatch(gamer.slug);

  useEffect(() => {
    dispatch(getGamerId("portal"));
  }, []);

  return (
    <div>
      <h2>detales</h2>
    </div>
  );
};

export default GamerDetails;
