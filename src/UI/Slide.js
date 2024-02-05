import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import kid from "../Images/Kids.jpg";
import man from "../Images/man.jpg";
import women from "../Images/women.jpg";
import "./Slide.css";

export default function Slide() {
  return (
    <div className="slidemain">
      <div class="container-fluid p-0">
        <Carousel className="slide">
          <Carousel.Item style={{ width:"100%" }}>
            <img style={{ width:"100%"}} className="iman" src={man} alt="Not Found" />
            <Carousel.Caption>
              <Link to="/men" state={{ from: "men" }} >
              <div class="btm-left"><button>SHOP NOW</button></div></Link>
              <div className="bottom-right">
              TRENDY COLLECTIONS
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img style={{ width: "100%" }} src={kid} alt="Not Found"/>
            <Carousel.Caption>
            <Link to="/boys" state={{ from: "boys" }} >
            <div class="btm-left"><button>SHOP NOW</button></div></Link>
            <div className="bottom-right">
            MEGA SALE
            </div>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
            <img style={{  width: "100%" }} src={women} alt="Not Found"/>
            <Carousel.Caption>
            <Link to="/women" state={{ from: "women" }} >
              <div class="btm-left"><button>SHOP NOW</button></div></Link>
              <div className="bottom-right">
              WINTER COLLECTION
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
