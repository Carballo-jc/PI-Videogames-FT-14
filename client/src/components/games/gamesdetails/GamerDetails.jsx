import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGamerDetail } from "../../../actions";
import styles from "./styles.module.css";
import parse from "html-react-parser";
import { FaStar } from "react-icons/fa";
import Loading from "../loading/Loading";

const GamerDetails = (props) => {
  const gamer = useSelector((state) => state.onegamer);
  const {
    name,
    background_image,
    rating,
    released,
    genres,
    platforms,
    genders,
  } = gamer;
  const description = gamer ? parse(`${gamer.description}`) : undefined;
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getGamerDetail(id));
  }, [dispatch, id]);
  //regresar
  const handleBack = (e) => {
    props.history.push(`/videogames`);
  };
  return (
    <div className={styles.card_detalle}>
      {gamer.length === 0 ? (
        <Loading />
      ) : (
        <div>
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
                      : genders.map((gender, i) => (
                          <span key={i}>{gender.name},</span>
                        ))}
                  </p>
                </div>
                <div className={styles.ranking}>
                  <p>Ranking: {rating} </p>
                  <FaStar color="yellow" />
                </div>
                <div className={styles.plataforms}>
                  <p>Plataformas:</p>
                  <div className={styles.company}>
                    {Array.isArray(platforms) ? (
                      platforms?.map((element, i) => {
                        return <span key={i}>{element.platform.name}, </span>;
                      })
                    ) : (
                      <span>{platforms}, </span>
                    )}
                  </div>
                </div>
                <div className={styles.descriptions}>
                  Descripción: {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamerDetails;
