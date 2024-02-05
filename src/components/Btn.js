import React from 'react';
import Button from "./Btn.module.css";

export default function Btn(props) {
  return (
    <div>
      <button className={Button.btn}>{props.name}</button>
    </div>
  )
}
