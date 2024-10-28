import React, { useEffect, useState } from "react";
import crownLogo from "../imgs/crown.png";
import LeftImg4 from "../imgs/fourthPage-left.png";
import rocket from "../imgs/rocket.png";

function FourthPage() {

  const [storedName, setStoredName] = useState("");
  const [storedMail, setStoredMail] = useState("");
  const [storedPhone, setStoredPhone] = useState();


  useEffect(() => {
    const data = localStorage.getItem("userInfo"); 
    if (data) {
      const parsedData = JSON.parse(data); 
      setStoredName(parsedData.name); 
      setStoredMail(parsedData.email);
      setStoredPhone(parsedData.phone)
    }
  }, []);

  return (
    <div className="firstPage">
      <div className="left-side">
        <div className="purple-header">
          <img src={crownLogo} alt="Crown Logo" />
          <h3>Redberry Knight Cup</h3>
        </div>
        <div className="leftImd-Div">
          <img src={LeftImg4} className="leftImg" alt="Left Side Image" />
          <div className="userInfo">
            <h3>User Data:</h3>
            <p>FullName: {storedName || "No data found"}</p>
            <p>Email: {storedMail || "No data found"}</p>
            <p>Phone Number: {storedPhone || "No data found"}</p>
          </div>
        </div>
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
