import React from "react";
import crownLogo from "../imgs/crown.png";
import LeftImg4 from "../imgs/fourthPage-left.png";
import rocket from "../imgs/rocket.png";

function FourthPage() {
  return (
    <div className="firstPage">
      <div className="left-side">
        <div className="purple-header">
          <img src={crownLogo} alt="Crown Logo" />
          <h3>Redberry Knight Cup</h3>
        </div>
        
        <img src={LeftImg4} className="leftImg" alt="Left Side Image" />
      </div>
      <div className="rightSide">
        <div>
            <img src={rocket} alt="rocket" className="rocket" />
            <h2 className="onboarding">Onboarding completed!</h2>
        </div>
      </div>
    </div>
  );
}

export default FourthPage;
