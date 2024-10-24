import React from 'react';
import crownLogo from "../imgs/crown.png";
import LeftImg from "../imgs/left-chess-background.png";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import rightArrow from "../imgs/arrow-right.png";

function FirstPage() {

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/secondPage');
  };

  return (
    <div className='firstPage'>
        <div className="left-side">
            <div className="purple-header">
                <img  src={crownLogo}/>
                <h3>Redberry Knight Cup</h3>
            </div>
            <img src={LeftImg} className='leftImg'/>
        </div>
        <div className="right-side">
          <div className='middleText'>
            <h2>
              CHESS SAYS 
                <span className='aLot'>A LOT ABOUT</span> <br />
              WHO WE ARE
            </h2>

          </div>
          <button className='start-btn' onClick={handleNavigation}>
              Get Started 
            <img src={rightArrow} />
          </button>
        </div>
    </div>
  )
}

export default FirstPage