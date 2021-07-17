import React from "react";
import styles from "./styles.module.css";

const Paginate = ({ pages, handleClick }) => {
  return (
    <div className={styles.btn_container}>
      {pages.map((e) => (
        <button key={e} id={e} onClick={handleClick} className={styles.btn}>
          {e}
        </button>
      ))}
    </div>
  );
};

export default Paginate;
