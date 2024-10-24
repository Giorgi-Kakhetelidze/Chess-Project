import FirstPage from "./components/FirstPage";
import { Routes, Route } from "react-router-dom";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/secondPage" element={<SecondPage />} /> 
        <Route path="/thirdPage" element={<ThirdPage />} />
        <Route path="/thirdPage" element={<ThirdPage />} />
        <Route path="/fourthPage" element={<FourthPage />} />
      </Routes>

      
    </div>
  );
}

export default App;
