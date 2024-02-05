import React from "react";
import hanger from "../Images/hanger.jpg";
import HangerStyles from "./Hanger.module.css";
export default function Hanger() {
  return (
    <div className={HangerStyles.hApp}>
      <div className={HangerStyles.hanger}>
        <img className={HangerStyles.himg} src={hanger} alt="Not Found"/>
        <label className={HangerStyles.hpar}>
          <p className={HangerStyles.hred}>TRENDING</p>
          <h2 className={HangerStyles.hh3}>New Fashion</h2>
          <p className={HangerStyles.hp}>
            Lorem ipsum dolor sit amet consectetur elit.Dolores Disi distinction
            magni,iure deserunt doloribus opyio
          </p>
          <br></br>
        </label>
      </div>
    </div>
  );
}
