import React, { useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import data from '../JSONDATA/Alldata';
import pi from "../UI/Productitem.module.css";
import { MyContext } from './context';

export default function Search() {
  const location = useLocation();
  const { from } = location.state;
  const inputElement = useRef();
  const {cart,wishlist,setCount,count,wishcount,setwishCount,setTotalprice} =  useContext(MyContext);
  const addwish = (item) =>{
      setwishCount(wishcount+1);
      wishlist.push({item});
      alert("Product added successfully");
  }
  
  const transfer = (event) => {
    const mainSrc = inputElement.current.src;
    inputElement.current.src = event.target.src;
    event.target.src = mainSrc;
  }
  const addcart = (item)=>{
    setTotalprice((prevState)=> prevState+item.price)
       setCount(count+1);
       cart.push({item});
       alert("Product added successfully") ;
  }
  return (
    <div>
    {
      data.map((item)=>{
        let img1=item["sideimg"][0]["leftimg"];
        let img2=item["sideimg"][1]["leftimg1"];
        return(
       (item.name== from)?<div className={pi.main}>
       <div className={pi.left}>
         <div className={pi.img}>
         <img className={pi.small} src={img1} alt="nothing" onClick={transfer}/>
         </div>
         <div className={pi.img}>
         <img className={pi.small} src={img2} alt="nothing" onClick={transfer}/>
         </div>
       </div>
       <div className={pi.middle}>
         <div className={pi.img}>
         <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
         <TransformComponent>
           <img id='main-img' src={item.image} alt="nothing" ref={inputElement}  />
           </TransformComponent>
           </TransformWrapper>
         </div>
       </div>
       <div className={pi.right}>
         <table>
           <tr>
             <td>NAME</td>
             <td>{item.name}</td>
           </tr>
           <tr>
             <td>DETAILS</td>
             <td>{item.description}</td>
           </tr>
           <tr>
             <td>COLOR</td>
             <td>{item.color}</td>
           </tr>
           <tr>
             <td>PRICE</td>
             <td>{item.price}/-</td>
           </tr>
           <tr>
             <td>RATING</td>
             <td>{item.rating}</td>
           </tr>
         </table>
         <button className={pi.btn} onClick={()=>addwish(item)}>ADD TO WISHLIST</button>
         <button className={pi.btn} onClick={()=>addcart(item)}>ADD TO CART</button>
       </div>
     </div>:null
       )
      })
    }
    </div>
  )
}
