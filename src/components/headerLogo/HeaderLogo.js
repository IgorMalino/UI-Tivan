import React, { useEffect, useState, useContext } from 'react';
// importing Css styles
import './headerLogo.css'
import {Link}from 'react-router-dom'
import { UserContext } from '../../UserContext';

const content_item_cont = {
    about: "About",
    title_top: "Tivan",
    title_top_art: "artifacts"
}

const HeaderLogo = () => {
  const {anim, setAnim} = useContext(UserContext)
  console.log(anim)
  const [animatHeader, setAnimateHeader] = useState(anim)

  useEffect(()=> {
      setTimeout(() => {
        setAnimateHeader(setAnim(false))
      }, 22000)
  }, [])
  


  return (
        <>
        <Link to='about'>
        <div id="header" >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -75 50 138.95" className="animate logosvg">
                <g className={`${animatHeader && "animation"} svgTop`} style={{ animationDelay: "21.3s"}}>
                <path   className="animate"
                      d="M0,12.12,6.6,8.87Q15.53,4.49,24.45.13a1.34,1.34,0,0,1,1-.06Q37.58,6,49.71,12a.55.55,0,0,1,.29.27h-.55c-5.73,0-11.47,0-17.2,0a2,2,0,0,0-1.57.71c-1.85,2-3.74,3.93-5.68,6l-2.2-2.3c-1.25-1.3-2.47-2.62-3.74-3.88a1.57,1.57,0,0,0-1-.45c-5.78,0-11.56,0-17.34,0H0Z"/>
                </g>
                <g style={{animationDelay: "20.9s"}} className={`${animatHeader && "animation"} svgLeft`}>
                <path   className="animate" d="M17.61,59C11.82,48.18,6,37.42.21,26.57h17.5V58.89Z"/>
                </g>
                <g style={{animationDelay: "20.6s"}} className={`${animatHeader && "animation"} svgRight`}>
                <path   className="animate" d="M32.28,58.89V26.6h17.5L32.4,58.94Z"/>
                </g>
              </svg>
            </div>
            <div style={{animationDelay: "20.3s"}} className={`title ${animatHeader && "animationHeader"}`}>TIVAN</div>
            <div style={{animationDelay: "20.2s"}} className={`subtitle ${animatHeader && "animationHeader"}`}>{content_item_cont.title_top_art}</div>
          </div>
          </Link>
          </>
    )
}

export default HeaderLogo