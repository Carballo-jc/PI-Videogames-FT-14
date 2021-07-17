import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGamerDetail } from "../../../actions";
import styles from "./styles.module.css";
import parse from 'html-react-parser'
import { FaStar } from "react-icons/fa";

const GamerDetails = ({ history }) => {
  const gamer = useSelector((state) => state.onegamer);
  const { name, background_image, rating, released, genres,platforms} =
    gamer;
    const  description  = gamer ? (parse(`${gamer.description}`)) : undefined;
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGamerDetail(Number(id)));
  }, [dispatch,id]);
  //regresar
    const handleBack = () =>  {
      history.push(`/videogames`);;
    };;
  return (
    <div className={styles.card_detalle}>
      <div className={styles.btn_back}>
        <button onClick={() => handleBack()}>Back</button>
      </div>
      <div className={styles.content_detalles}>
        <h1>{name}</h1>
        <div className={styles.detalles}>
          <div className={styles.img_juego}>
            <img src={background_image} alt="juego" />
          </div>
          <div className={styles.items}>
            <div className={styles.date}>
              <p>
                Fecha:<span> {released}</span>
              </p>
            </div>
            <div className={styles.gender}>
              <p>
                Genero:
                {genres
                  ? genres.map((gender, i) => (
                      <span key={i}>{gender.name},</span>
                    ))
                  : null}
              </p>
            </div>
            <div className={styles.ranking}>
              <p>Ranking: {rating} </p>
              <FaStar  color="yellow"/>
            </div>
            <div className={styles.plataforms}>
              <p>Plataformas:</p>
              <div className={styles.company}>
                {platforms
                  ? platforms.map((element, i) => {
                      return (
                        // <img src={element.platform.image_background} alt={element.name}  />
                        <span key={i}>{element.platform.name}, </span>
                      );
                    })
                  : null}
              </div>
            </div>
            <div className={styles.descriptions}>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamerDetails;
