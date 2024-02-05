import React from 'react'
import { Link } from 'react-router-dom'

export default function Thanks() {
  return (
    <div style={{marginTop:180,textAlign:"center",marginBottom:100}}>
      <h1>YOUR ORDER PLACED SUCCESFULLY :)</h1>
      <Link to="/"><button style={{textAlign:"center",width:250,marginLeft:450,marginTop:30}}>CONTINUE  FOR  SHOPPING</button></Link>
    </div>
  )
}
