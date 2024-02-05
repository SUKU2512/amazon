import React from "react";
import { Link } from "react-router-dom";
import w1 from "../Images/w1.jpg";
import w2 from "../Images/w2.jpg";
import w3 from "../Images/w3.jpg";
import w4 from "../Images/w4.jpg";
import w5 from "../Images/w5.jpg";
import collection from "./collection.module.css";

export default function Collection() {
  return (
    <div className={collection.cApp}>
    <div className={collection.cbox}>
      <div className={collection.imageholder}>
        <Link to="/men" state={{ from: "men" }}>
          <img src={w1} alt="Not Found" className={collection.cimg} />
          <caption>Men Wear</caption>
        </Link>
      </div>
      <div className={collection.imageholder}>
        <Link to="/women" state={{ from: "women" }}>
          <img src={w2} alt="Not Found" className={collection.cimg}/>
          <caption>Women Wear</caption>
        </Link>
      </div>
      <div className={collection.imageholder}>
        <Link to="/boys" state={{ from: "boys" }}>
          <img src={w3} alt="Not Found" className={collection.cimg}/>
          <caption>Boys Wear</caption>
        </Link>
      </div>
      <div className={collection.imageholder}>
        <Link to="/girls" state={{ from: "girls" }}>
          <img src={w4} alt="Not Found" className={collection.cimg}/>
          <caption>Girls Wear</caption>
        </Link>
      </div>
      <div className={collection.imageholder}>
        <Link to="/infants" state={{ from: "infants" }}>
          <img src={w5} alt="Not Found" className={collection.cimg}/>
          <caption>Infants Wear</caption>
        </Link>
      </div>
      </div>
    </div>
  );
}
