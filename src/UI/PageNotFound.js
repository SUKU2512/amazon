import React from 'react'
import { Link } from 'react-router-dom'
import Btn from '../components/Btn'
import "./Slide.css"

export default function PageNotFound() {
  return (
    <div style={{marginTop:100,textAlign:"center",marginBottom:100}}>
    <div style={{fontSize:50,color:"red",textAlign:"center"}}className='pnf'>404</div>
    <h2 className='oops'>Oops! Page Not Found!</h2>
    <p className='pnfp'>we're sorry but we can't seem to find the page you requested. This might be because you have typed the web address incorrectly.</p>
    <Link to="/"><div className="pnfbtn"><Btn name="Back To Home"/></div></Link>
    </div>
  )
}
