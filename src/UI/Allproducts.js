import React, { useContext, useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiTwotoneStar } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import Subcat from "../JSONDATA/Subcat";
import product from "../UI/Allproducts.module.css";
import { MyContext } from "./context";


export default function Allproducts() {
  const location = useLocation();
  const { from } = location.state;
  const [data, setData] = useState(Subcat[from]);
  const [filter] = useState([]);

  Subcat[from].map((items) => {
    filter.push(items.type);
  });

  useEffect(() => {
    setData(Subcat[from]);
  }, [from]);

  function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }
  let unique = filter.filter(onlyUnique);
  useEffect(() => {
    setData(Subcat[from]);
  }, [[from][unique]]);

  const { cart, setCount, count, setTotalprice } = useContext(MyContext);
  const addtocart = (item) => {
    setTotalprice((prevState) => prevState + item.price);
    setCount(count + 1);
    cart.push({ item });
  };


  return (
    <div className={product.App}>
      <div className={product.main} style={{ marginTop: 10 }}>
        <div className={product.second}>
          <div className={product.round}>
            {data.map((item) => {
              return (
                <div className={product.container}>
                  <Link to="/Productitem" state={{ item: { ...item } }}>
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
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
