import React, { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiTwotoneStar } from "react-icons/ai";
import { MdRefresh } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import Products from "../JSONDATA/Products";
import product from "../UI/Productview.module.css";
import { MyContext } from "./context";
export default function Trail() {
  const location = useLocation();
  const { from } = location.state;
  const [images, setImages] = useState(Products[from]);
  const { cart, setCount, count, setTotalprice } = useContext(MyContext);

  const addtocart = (item) => {
    setTotalprice((prevState) => prevState + item.price);
    setCount(count + 1);
    cart.push({ item });
    alert("Product added Successfully");
  };
  const handleChangepricelh = () => {
    const sorted = [...images].sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
    });
    setImages(sorted);
  };
  const handleChangeaz = (x) =>{
    if(x==1){
      const sorted = [...images].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
      });
      setImages(sorted);
    }
    else{
      const sorted = [...images].sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
      });
      setImages(sorted);
    }
    
  }
  const handleChangepricehl = () => {
    const sorted = [...images].sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      }
    });
    setImages(sorted);
  };
  const clearHandle = () => {
    let radios = document.getElementsByName("test1");
    for (let i = 0; i < radios.length; i++) {
      radios[i].checked = false;
    }
    let radios2 = document.getElementsByName("test2");
    for (let i = 0; i < radios2.length; i++) {
      radios2[i].checked = false;
    }
    setImages(Products[from]);
  };
  const handleChange = (e) => {
    setImages(() =>
      Products[from].filter((color) => {
        return color.color === e.target.value;
      })
    );
  };
  useEffect(() => {
    let radios2 = document.getElementsByName("test2");
    for (let i = 0; i < radios2.length; i++) {
      radios2[i].checked = false;
    }
    let radios = document.getElementsByName("test1");
    for (let i = 0; i < radios.length; i++) {
      radios[i].checked = false;
    }
    setImages(Products[from]);
  }, [Products[from]]);

  return (
    <div className={product.App}>
      <div style={{ display: "flex", alignItems: "center", marginLeft: 20 }}>
        <div>
          FILTER{" "}
          <MdRefresh className={product.MdRefresh} onClick={clearHandle} />
        </div>
        <div class="dropdown" style={{ marginLeft: "78%" }}>
          <button class="dropbtn">SORT</button>
          <div class="dropdown-content">
            <p
              onClick={() =>handleChangeaz(1)}  
              style={{ cursor: "pointer", marginLeft: 30 }}
              className={product.az}
            >
              A-Z
            </p>
            <p
              onClick={()=>handleChangeaz(2)}
              style={{ cursor: "pointer", marginLeft: 30 }}
              className={product.az}
            >
              Z-A
            </p>
          </div>
        </div>
      </div>

      <div className={product.main}>
        <div className={product.left}>
          <div>
            <div className={product.categories}>
              <p>COLOR PICKER</p>
              <input
                onChange={handleChange}
                type="radio"
                value="black"
                title="Black"
                name="test1"
                color="black"
                className={product.test3}
              />
              <span className={product.black}></span>
              <label for="color">BLACK</label>
              <br></br>
              <input
                onChange={handleChange}
                type="radio"
                value="white"
                title="WHITE"
                name="test1"
                color="white"
                className={product.test3}
              />
              <span className={product.white}></span>
              <label for="color">WHITE</label>
              <br></br>
              <input
                onChange={handleChange}
                type="radio"
                value="blue"
                title="BLUE"
                name="test1"
                color="blue"
                className={product.test3}
              />
              <span className={product.blue}></span>
              <label for="color">BLUE</label>
              <br></br>
              <input
                onChange={handleChange}
                type="radio"
                value="green"
                title="GREEN"
                name="test1"
                color="green"
                className={product.test3}
              />
              <span className={product.green}></span>
              <label for="color">GREEN</label>
              <br></br>
              <input
                onChange={handleChange}
                type="radio"
                value="yellow"
                title="YELLOW"
                name="test1"
                color="yellow"
                className={product.test3}
              />
              <span className={product.yellow}></span>
              <label for="color">YELLOW</label>
              <br></br>
              <input
                onChange={handleChange}
                type="radio"
                value="red"
                title="RED"
                name="test1"
                color="red"
                className={product.test3}
              />
              <span className={product.red}></span>
              <label for="color">RED</label>
              <br></br>
              <input
                onChange={handleChange}
                type="radio"
                value="beige"
                title="BEIGE"
                name="test1"
                className={product.test3}
                color="beige"
              />
              <span className={product.cream}></span>
              <label for="color">BEIGE</label>
              <br></br>
              <input
                onChange={handleChange}
                type="radio"
                value="pink"
                title="PINL"
                name="test1"
                color="pink"
                className={product.test3}
              />
              <span className={product.pink}></span>
              <label for="color">PINK</label>
              <br></br>
            </div>
          </div>
          <div style={{ marginTop: 20 }} className={product.color}></div>
          <div className={product.price}>
            <p>PRICE SORT</p>
            <input
              onChange={handleChangepricelh}
              type="radio"
              name="test2"
              className={product.test3}
              value="l"
            />
            <label for="color">LOW-HIGH</label>
            <br></br>
            <input
              onChange={handleChangepricehl}
              type="radio"
              name="test2"
              className={product.test3}
              value="h"
            />
            <label for="color">HIGH-LOW</label>
          </div>
        </div>
        <div className={product.second}>
          <div className={product.round}>
            {images.length === 0 ? (
              <h1 className={product.noresult}>NO RESULT FOUND :(;</h1>
            ) : (
              images.map((item) => {
                return (
                  <div className={product.container}>
                    <Link to="/ProductItem" state={{ item: { ...item } }}>
                      <img
                        className={product.image}
                        src={item.image}
                        alt="Not Found"
                      />
                    </Link>
                    <p className={product.rating}>
                      {item.rating}
                      <AiTwotoneStar fill="green" />
                    </p>

                    <h5 className={product.heading}>{item.name}</h5>
                    <div style={{ display: "flex" }}>
                      <p className={product.price}>Rs.{item.price}</p>
                      <AiOutlineShoppingCart
                        className={product.cart}
                        onClick={() => addtocart(item)}
                        style={{
                          width: 60,
                          height: 30,
                          marginLeft: "auto",
                          marginRight: 20,
                        }}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
