import React from "react";
import { Link } from "react-router-dom";
import home from "../assets/images/1.jpg";
import styles from "./styles.module.css";

const HomeScreen = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content_image}>
        <img src={home} alt="imagen" className={styles.image} />
        <button className={styles.btn_ingresar}>
          <Link to={"/videogames"} className={styles.link_ingreso}>
            Ingresar
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
