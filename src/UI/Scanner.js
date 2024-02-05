import React, { useEffect } from 'react';
import scanner from '../Images/scanner.png';


export default function Scanner() {
    useEffect(() => {
        setTimeout(function() {
            window.location.replace('/Thanks');
          }, 5000);
      }, []);
  return (
    <div style={{marginTop:100,marginBottom:100,textAlign:"center"}}>
      <img src={scanner} alt="Not Found"/>
      <div>
      <b><h1>SCAN AND PAY</h1></b>
      </div>
    </div>
  )
}
