import React, { useContext } from "react";
import product from "../UI/Productview.module.css";
import { MyContext } from "./context";

export default function Wishlist() {
  const { wishlist } = useContext(MyContext);
  console.log(wishlist);
  return (
    <div style={{ margin: 90 }} className={product.Acart}>
    <div className={product.AAcart}>
    <table>  
    {
      wishlist.length ===0 ? <h1 style={{textAlign:"center",fontWeight:"bold",fontSize:55}}>NO PRODUCT IN WISHLIST</h1> : wishlist.map((item) => {
        return (
          <div>
              <tr>
                <td>
                <img
                className={product.short}
                src={item.item.image}
                alt="NO FOUND"
              />
                </td>
                <td className={product.cartname}>{item.item.name}</td>
                <td className={product.cartprice}>Rs.{item.item.price}/-</td>
              </tr>
            
          </div>
        );
      })
    }
      </table>
      </div>
    </div>
  );
}
