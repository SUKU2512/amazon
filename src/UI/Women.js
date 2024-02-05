import React from 'react';
import wr1 from '../Images/wr1.jpg';
import wr2 from '../Images/wr2.jpg';
import wr3 from '../Images/wr3.jpg';
import wr4 from '../Images/wr4.jpg';
import wr5 from '../Images/wr5.jpg';
import wr6 from '../Images/wr6.jpg';
import wome from "./Womens.module.css";

export default function Women() {
  return (
    <div className={wome.woApp}>
    <span className={wome.irow}>
    <img className={wome.wr} src={wr1} alt="Not  Found" />
    <img className={wome.wr} src={wr2} alt="Not  Found" />
    <img className={wome.wr} src={wr3} alt="Not  Found" />
    <img className={wome.wr} src={wr4} alt="Not Found" />
    <img className={wome.wr} src={wr5} alt="Not  Found" />
    <img className={wome.wr} src={wr6} alt="Not Found" />
    <label className={wome.wlabel}><b className="wbold">Follow our instagram</b><p className={wome.wmail}>@aviwp.studio</p></label>
  </span>
    </div>
  )
}
