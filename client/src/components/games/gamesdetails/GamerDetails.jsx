import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGamerDetail } from "../../../actions";
import styles from "./styles.module.css";

const GamerDetails = () => {
  const gamer = useSelector((state) => state.onegamer);
  const { name, background_image, rating, released, platforms, description } =
    gamer;
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGamerDetail(Number(id)));
  }, [dispatch]);

  return (
    <div className={styles.card_detalle}>
      <div className={styles.content_detalles}>
        <div className={styles.detalles}>
          <div className={styles.img_juego}>
            <img src={background_image} alt="juego" />
          </div>
          <div className={styles.items}>
            <h1>{name}</h1>
            <div className={styles.date}>
              <p>
                Fecha:<span> {released}</span>
              </p>
            </div>
            <div className={styles.gender}>
              <p>
                Genero:<span> Guerrar</span>
              </p>
            </div>
            <div className={styles.ranking}>
              <p>Ranking: {rating} </p>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            <div className={styles.plataforms}>
              <p>Platform</p>
              <div className={styles.company}>
                {/* <img src={ps5} alt="" /> */}
              </div>
            </div>
            <div className={styles.descriptions}>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className={styles.btn_back}>
          <button>Back</button>
        </div>
      </div>
    </div>
  );
};

export default GamerDetails;
