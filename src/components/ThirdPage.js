import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftImg3 from "../imgs/leftImg3.png";
import crownLogo from "../imgs/crown.png";
import checkAll from "../imgs/check-all.png";
import Select from "react-select";
import magnus from "../imgs/magnus.png";
import wilhelm from "../imgs/wilhelm.png";
import bobby from "../imgs/bobby.png";
import ding from "../imgs/bobby2.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Options for knowledge level
const options = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "hard", label: "Hard" },
];

// Options for character selection
const options2 = [
  { value: "magnus", label: "Magnus Carlsen", img: magnus },
  { value: "wilhelm", label: "Wilhelm Steinitz", img: wilhelm },
  { value: "bobby", label: "Bobby Fischer", img: bobby },
  { value: "ding", label: "Ding Liren", img: ding },
];

// Custom Option Component for character selection
const CustomOption = ({ innerRef, innerProps, data }) => (
  <div
    ref={innerRef}
    {...innerProps}
    style={{
      display: "flex",
      alignItems: "center",
      padding: "8px",
      transition: "background-color 0.2s",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = "rgba(247, 247, 249, 1)")
    }
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
  >
    <span style={{ marginRight: "10px" }}>{data.label}</span>
    <img
      src={data.img}
      alt={data.label}
      style={{ width: "30px", height: "30px" }}
    />
  </div>
);

function ThirdPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [inputValue, setInputValue] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("userInfo");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const handleClick = () => {
    setInputValue(true);
  };
  const handleKnowledgeLevelChange = (option) => {
    setSelectedOption(option);
    handleClick();
  };

  const handleCharacterChange = (option) => {
    setSelectedCharacter(option);
  };

  const validationSchema = Yup.object({
    participated: Yup.string().required("Please select yes or no"),
  });

  const handleBack = () => {
    navigate("/secondPage");
  };

  const handleNext = () => {
    if (!selectedOption || !selectedCharacter ) {
      alert("Please fill in all the required fields.");
    }else{
      navigate("/fourthPage");

    }
  };

  return (
    <div className="firstPage">
      <div className="left-side">
        <div className="purple-header purple-header3">
          <img src={crownLogo} alt="Crown Logo" />
          <h3>Redberry Knight Cup</h3>
        </div>
        <div className="textOnImg textOnImg3">
          <p className="txt1">
            “MANY HAVE BECOME CHESS MASTERS; <br />
            NO ONE HAS BECOME THE MASTER OF CHESS.”
          </p>
          <div className="txt2-div">
            <p className="txt2">-SIEGBERT TARRASCH</p>
          </div>
        </div>
        <img src={LeftImg3} className="leftImg" alt="Left Side Image" />
      </div>

      <div className="right-side2 container">
        <div className="header ">
          <p className="header2">First step is done, continue to finish onboarding </p>
        </div>
        <div className="line"></div>

        <div className="steps steps3">
          <div className="persInfo">
            <div className="firstStep firstStep2">
              <img src={checkAll} alt="" />
            </div>
            <p>Personal information</p>
          </div>
          <div className="line2"></div>
          <div className="chessExp">
            <div
              className="secondStep secondStep2"
              style={{
                backgroundColor: inputValue
                  ? "rgba(233, 250, 241, 1)"
                  : "white",
              }}
            >
              <p className="two">2</p>
            </div>
            <p>Chess experience</p>
          </div>
        </div>
        <div className="personal-information">
          <div className="header">
            <h2>Chess experience</h2>
            <p>This Is Basic Information Fields</p>
          </div>
        </div>

        <form className="inputs3">
          {/* Knowledge Level Selection Dropdown */}
          <Select
            id="knowledge-level"
            value={selectedOption}
            onChange={handleKnowledgeLevelChange}
            options={options}
            placeholder="Level of knowledge *"
            className="knowledge-Level"
            styles={{
              control: (base) => ({
                ...base,
                border: "none",
                borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "0px",
                fontFamily: '"Open Sans", sans-serif',
                "&:hover": {
                  borderBottom: "2px solid rgba(0, 0, 0, 0.4)",
                },
              }),
              menu: (base) => ({
                ...base,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                fontFamily: '"Open Sans", sans-serif',
              }),
              option: (base, state) => ({
                ...base,
                fontWeight: state.isFocused ? "bold" : "normal",
                backgroundColor: state.isFocused
                  ? "rgba(247, 247, 249, 1)"
                  : "white",
                color: "black",
                fontFamily: '"Open Sans", sans-serif',
              }),
              placeholder: (base) => ({
                ...base,
                color: "rgba(33, 37, 41, 1)",
                fontFamily: '"Open Sans", sans-serif',
              }),
            }}
          />

          {/* Character Selection Dropdown */}
          <Select
            id="character-selection"
            value={selectedCharacter}
            onChange={handleCharacterChange}
            options={options2}
            placeholder="Choose your character *"
            className="character-select knowledge-Level"
            components={{ Option: CustomOption }}
            styles={{
              control: (base) => ({
                ...base,
                border: "none",
                borderBottom: "2px solid rgba(0, 0, 0, 0.2)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "0px",
                fontFamily: '"Open Sans", sans-serif',
                "&:hover": {
                  borderBottom: "2px solid rgba(0, 0, 0, 0.4)",
                },
              }),
              menu: (base) => ({
                ...base,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                fontFamily: '"Open Sans", sans-serif',
              }),
              option: (base, state) => ({
                ...base,
                fontWeight: state.isFocused ? "bold" : "normal",
                backgroundColor: state.isFocused
                  ? "rgba(247, 247, 249, 1)"
                  : "white",
                color: "black",
                fontFamily: '"Open Sans", sans-serif',
              }),
              placeholder: (base) => ({
                ...base,
                color: "rgba(33, 37, 41, 1)",
                fontFamily: '"Open Sans", sans-serif',
              }),
            }}
          />
        </form>

        <Formik
          initialValues={{ participated: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            alert(`You selected: ${values.participated}`);
          }}
        >
          {(
            { values } // Access values here
          ) => (
            <Form className="lastInput">
              <h2>Have you participated in the Redberry Championship? *</h2>
              <div>
                <label>
                  <Field type="radio" name="participated" value="yes" />
                  Yes
                </label>
                <label>
                  <Field type="radio" name="participated" value="no" />
                  No
                </label>
              </div>
              <ErrorMessage
                name="participated"
                component="div"
                style={{ color: "red" }}
              />
              <div className="buttons">
                <button className="back-btn back-btn3" onClick={handleBack}>
                  Back
                </button>
                <button
                  className="next-btn next-btn3"
                  onClick={handleNext}
                  
                >
                  Done
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ThirdPage;
