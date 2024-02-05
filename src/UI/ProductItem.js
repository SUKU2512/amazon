import React, { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import pi from "../UI/Productitem.module.css";
import { MyContext } from './context';


export default function ProductItem() {
  const {cart,wishlist,setCount,count,wishcount,setwishCount,setTotalprice,rimages} =  useContext(MyContext);
  const location = useLocation();
  const { item } = location.state;
  
  const inputElement = useRef();
  let img1=item["sideimg"][0]["leftimg"];
  let img2=item["sideimg"][1]["leftimg1"];
  let img3=item.image;

  
  const transfer = (event) => {
    const mainSrc = inputElement.current.src;
    inputElement.current.src = event.target.src;
    event.target.src = mainSrc;
  }
  const addwish = () =>{
      setwishCount(wishcount+1); 
      wishlist.push({item}); 
      alert("Product added successfully");
  }
  const addcart = ()=>{
    setTotalprice((prevState)=> prevState+item.price)
       setCount(count+1);
       cart.push({item});
       alert("Product added successfully") ;
  }
  
  useEffect(()=>{
    rimages.unshift(item);
  },[])
  
  return (
    <div className={pi.main}>
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
          <img id='main-img' src={img3} alt="nothing" ref={inputElement}  />
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
        <button className={pi.btn} onClick={addwish}>ADD TO WISHLIST</button>
        <button className={pi.btn} onClick={addcart}>ADD TO CART</button>
      </div>
    </div>
  );
}
