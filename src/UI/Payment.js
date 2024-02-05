import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from "./context";

export default function Payment() {
  const[para,setPara]=useState();
  const[value,setValue]=useState("");
  const { profilename } = useContext(MyContext);
const doubt = ()=>{
  if(profilename){
    if (
      value === "ptm" ||
      value === "gp" ||
      value === "pp"
    ) {
      setPara( "/Scanner");
    } 
    else if(
      value === "cod"
    ){
      setPara( "/Thanks");
    }
    else {
      alert("Please Select an Option");
    }
  }
  else{
    alert("Please SignIn");
  }
};
  const handle = (event) => {
    setValue(event.target.value);
  };
  return (
    <div style={{padding:150,marginLeft:300,paddingTop:150}}>
        <div >
          <h2>Payment Methods</h2>
          <br></br>

          <table>
            <tr>
            <label><td>
                <input
                  type="radio"
                  onChange={handle}
                  name="o1"
                  value="cod"
                />
              </td>
              <td>Cash On Delivery</td></label>
            </tr>

            <tr>
            <label><td>
                <input
                  type="radio"
                  onChange={handle}
                  name="o1"
                  value="pp"
                />
              </td>
              <td>Phone Pe</td></label>
            </tr>

            <tr>
              <td>
                <input
                  type="radio"
                  onChange={handle}
                  name="o1"
                  value="gp"
                />
              </td>
              <td>Google Pay</td>
            </tr>

            <tr>
              <td>
                <input
                  type="radio"
                  onChange={handle}
                  name="o1"
                  value="ptm"
                />
              </td>
              <td>Paytm</td>
            </tr>
          </table>
            <Link to={para}>
              <button style={{width:200,marginTop:30}}
                type="button"
                onClick={doubt}
              >
                Continue To Payment
              </button>
            </Link>
        </div>
      </div>
  )
}
 
