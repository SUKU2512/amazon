import React, { useContext } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import footer from "./Footer.module.css";
import { MyContext } from './context';

export default function Footer() {
  const {disc,setDisc} =  useContext(MyContext);
  const currentYear = new Date().getFullYear();
  const getdata = (e) =>{

    setDisc(e.target.value);
  }
  const subscribe = () =>{
    if(disc){
      if (validator.isEmail(disc)){
        alert("Subscribed Successfull");
      }
      else{
        alert("Enter Proper Email");
      }
    }
    else{
      alert("Enter Email");

    }
  }
  return (
    <div className={footer.fApp} >
      <div className="row container-fluid">
        <div className="col-4">
          <b className={footer.fhead}>SIGN UP NOW & GET 10% OFF</b>
          <p className={footer.fp}>
            Get timely updates from your favorite products
          </p>
          <input
            className={footer.text}
            type="text"
            placeholder="Email Address*"
            onChange={getdata}
          ></input>
          <button className={footer.fbtn} onClick={subscribe}>SUBSCRIBE</button>
        </div>
        <div className="two col-3">
          <b className={footer.fhead}>CONTACT INFO</b>

          <li>Phone:888-999-000-1425</li>
          <li>Email:azedw@mail.com</li>
          <li>Address: 22/1 national city </li>
        </div>
        <div className="three col">
          <b className={footer.fhead} >COMPANY</b>
          <Link to="/about"><li className={footer.link}>About us</li></Link>
          <Link to="/Shippingpolicy"><li className={footer.link}>Shipping guide</li></Link>
          <Link to="/Privacypolicy"><li className={footer.link}>Privacy policy</li></Link>
        </div>
        <div className="four col" >
          <b className={footer.fhead}>PAYMENT & SHIPPING</b>
          <Link to="/terms"><li className={footer.link}>Terms and Conditions</li></Link>
          <Link to="/Shippingpolicy"><li className={footer.link}>Shipping policy</li></Link>
          <Link to="/Returnpolicy"><li className={footer.link}>Return policy</li></Link>
        </div>
      </div>
      <hr className={footer.hr}></hr>
      <div className={footer.row}>
      <div className="col">
          <b className={footer.bolde}>@ {currentYear} WP Studio,All Rights Reserved</b>
        </div>
        <div className={footer.col1}>
          <span className={footer.last}>FB</span>
          <span className={footer.last}>TW</span>
          <span className={footer.last}>IG</span>
          <span className={footer.last}>PR</span>
        </div>  
        <div className={footer.col2}>
        <span className={footer.last}>Privacy</span>
        <span className={footer.last}>Terms</span>
        <span className={footer.last}>Promo T&C Apply</span>
        </div>
      </div>
    </div>
  );
}
