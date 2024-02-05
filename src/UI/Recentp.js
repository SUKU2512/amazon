import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Recent from "./Recentp.module.css";
import { MyContext } from './context';

export default function Recentp() {
  const { rimages} = useContext(MyContext);
  if(rimages.length > 7){
    rimages.pop();
  }
  return (
    <div className={Recent.body}>
      <h2 style={{ marginTop:20,marginLeft:45}}>Recently Viewed Products</h2>
    <div style={{display:"flex"}}>
      {
        rimages.length == 0 ? <p className={Recent.nopro}>Currently there is No Recent PRODUCTS ARE THERE :(</p> :
        rimages.map((item) => {
          return (
            <div className={Recent.img} style={{width:300}}>
            <Link to="/ProductItem" state={{ item: {...item } }}>
              <img  src={item.image} alt="No Images Found" />
              <label className={Recent.slidelabel}>
                <b>{item.name}</b>
                <br></br>
                <b>${item.price}</b>
              </label>
              </Link>
            </div>
          );
        })
      }
        </div>
    </div>
  );
}
