import React, { useContext, useState } from "react";
import product from "../UI/Productview.module.css";
import { MyContext } from "./context";

export default function Spinner({name,image,price,number}) {
    const {setTotalprice} = useContext(MyContext);
    const [x,setX]=useState(number);
    const add = (x) =>
    {
        x < 10 ? setX(x+1) : alert("More Than 10 orders are not permitted") 
        setTotalprice((prevstate) => prevstate + price)
    }
    const sub = () =>{
      if(x>1){
        setX(x-1);
        setTotalprice((prevstate) => prevstate - price);
      }
      else{
        setX(x)
      }
    }
  return (
    <div className={product.div} style={{display:"flex"}}>
            <img
              className={product.short}
              src={image}
              alt="NO FOUND"
            />
  
          <p style={{width:200,marginTop:70}}>{name}</p>
          <button className={product.spinbtn} onClick={()=> sub(x)}>-</button> <p style={{marginTop:70}}>{x}</p><button className={product.spinbtn} onClick={()=>add(x)}>+</button>
          <p style={{marginTop:70,marginLeft:30}}>Rs.{price*x}/-</p>
          
      
    </div>
  );
}
