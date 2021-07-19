import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import SearchGamer from "../games/search/SearchGamer";
import Filters from "../filters/Filters";
import FilterOrigin from "../filters/FilterOrigin";
import FilterGender from "../filters/FilterGender";


const Navbar = () => {

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Link to="/" className={styles.link_item}>
          <h2>Video Games App</h2>
        </Link>
      </div>
      <Filters />
      <FilterOrigin />
      <FilterGender />
      <div className={styles.navbar_menu}>
        <SearchGamer />
        <div className={styles.nav_link}>
          <Link to="/" className={styles.link_item}>
            HOME
          </Link>
        </div>
        <div className={styles.nav_link}>
          <Link to="/create" className={styles.link_item}>
            +ADD GAMER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
