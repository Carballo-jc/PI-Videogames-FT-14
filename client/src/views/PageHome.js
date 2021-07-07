import React from "react";
import home from "../assets/images/1.jpg";
import styles from "./styles.module.css";
const Home = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content_image}>
        <img src={home} alt="imagen" className={styles.image} />
        <button className={styles.btn_ingresar}>Ingresar</button>
      </div>
    </div>
  );
};

export default Home;
