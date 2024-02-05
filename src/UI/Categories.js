import React from "react";
import {
  GiAmpleDress,
  GiDress,
  GiPirateCoat,
  GiSkirt,
  GiTankTop,
} from "react-icons/gi";
import { LuShirt } from "react-icons/lu";
import { PiPantsDuotone } from "react-icons/pi";
import { TbJacket } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./Categories.css";
export default function Categories() {
  return (
    <div className="cApp">
      <h3>Azedw Categories</h3>
      <h6>Our campaigns,latest trends and new collection</h6>
      <Link to="/tshirts" state={{ from: "tshirts" }}>
        <LuShirt className="icons one" />
      </Link>
      <Link to="/frocks" state={{ from: "frocks" }}>
        <GiAmpleDress className="icons" />
      </Link>
      <Link to="/skirts" state={{ from: "skirts" }}>
        <GiSkirt className="icons" />
      </Link>
      <Link to="/pants" state={{ from: "pants" }}>
        <PiPantsDuotone className="icons" />{" "}
      </Link>
      <Link to="/skirts" state={{ from: "skirts" }}>
        <TbJacket className="icons" />
      </Link>
      <Link to="/kurtis" state={{ from: "kurtis" }}>
        <GiDress className="icons" />
      </Link>
      <Link to="/shirts" state={{ from: "shirts" }}>
        <GiPirateCoat className="icons" />
      </Link>
      <Link to="/bodysuits" state={{ from: "bodysuits" }}>
        <GiTankTop className="icons" />
      </Link>
    </div>
  );
}
