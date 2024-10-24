import React, { useState, useEffect } from "react";
import LeftImg2 from "../imgs/leftImg2.png";
import crownLogo from "../imgs/crown.png";
import rightArrow from "../imgs/arrow-right.png";
import greenCheck from "../imgs/green-check.png";
import checkAll from "../imgs/check-all.png";
import { useNavigate } from "react-router-dom";
import errorIcon from "../imgs/ExclamationCircle.png";
import x from "../imgs/x.png";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css";

function SecondPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [inputValue, setInputValue] = useState(false);
  const [activeError, setActiveError] = useState(""); // State to track the active error
  const [errorTimeout, setErrorTimeout] = useState(null); // State to manage error timeout

  useEffect(() => {
    const valid =
      Object.values(formErrors).every((error) => error === "") &&
      Object.values(formData).every((data) => data !== "");
    setIsFormValid(valid);
  }, [formErrors, formData]);

  const handleClick = () => {
    setInputValue(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Validate the field immediately
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errors = { ...formErrors };
    let errorMsg = "";

    switch (name) {
      case "name":
        if (!/^[A-Za-z\s]+$/.test(value)) {
          errorMsg = "Name must contain only letters.";
        } else if (value.length <= 4) {
          errorMsg = "Name must be longer than 4 letters.";
        }
        break;

      case "email":
        const emailValid = /^\S+@\S+\.\S+$/.test(value);
        if (!emailValid) {
          errorMsg = "Email is invalid.";
        }
        break;

      case "phone":
        if (!/^\d+$/.test(value)) {
          errorMsg = "Phone number must contain only digits.";
        } else if (value.length < 8) {
          errorMsg = "Phone number must be at least 8 digits long.";
        }
        break;

      case "dob":
        if (!value) {
          errorMsg = "Date of birth is required.";
        }
        break;

      default:
        break;
    }

    // Update the errors state
    errors[name] = errorMsg;
    setFormErrors(errors);

    // If there's an error, set the active error to display
    if (errorMsg) {
      setActiveError(name);
      // Clear existing timeout to avoid multiple timeouts
      if (errorTimeout) {
        clearTimeout(errorTimeout);
      }
      // Set a timeout to clear the error after 3 seconds
      const timeoutId = setTimeout(() => {
        setActiveError("");
      }, 3000); // Adjust duration as needed
      setErrorTimeout(timeoutId);
    } else if (activeError === name) {
      // Clear the active error if this field is valid
      setActiveError("");
    }
  };

  const validateForm = () => {
    const errors = {
      name: formData.name ? "" : "Name is required.",
      email: formData.email ? "" : "Email is required.",
      phone: formData.phone ? "" : "Phone number is required.",
      dob: formData.dob ? "" : "Date of birth is required.",
    };

    Object.keys(formData).forEach((field) =>
      validateField(field, formData[field])
    );
    setFormErrors(errors);

    const valid = Object.values(errors).every((error) => !error);
    setIsFormValid(valid);
    return valid;
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleNext = () => {
    if (validateForm()) {
      localStorage.setItem("userInfo", JSON.stringify(formData));
      console.log(localStorage.getItem("userInfo"));
      navigate("/thirdPage");
    }
  };

  return (
    <div className="firstPage">
      <div className="left-side">
        <div className="purple-header">
          <img src={crownLogo} alt="Crown Logo" />
          <h3>Redberry Knight Cup</h3>
        </div>
        <div className="leftImg-div">
          <img src={LeftImg2} className="leftImg" alt="Left Side Image" />
          <div className="textOnImg">
            <p className="txt1">
              “WHEN YOU SEE A GOOD MOVIE, LOOK FOR A BETTER ONE.”
            </p>
            <p className="txt2">-EMANUEL LASKER</p>
          </div>
        </div>
      </div>

      <div className="right-side2 container">
        <div className="header">
          <p>Start Creating Your Account</p>
        </div>
        <div className="line"></div>

        <div className="steps">
          <div className="persInfo">
            <div
              className="firstStep"
              style={{
                backgroundColor: inputValue
                  ? "rgba(233, 250, 241, 1)"
                  : "white",
              }}
            >
              {isFormValid ? (
                <img
                  src={checkAll}
                  className="valid-check-all"
                  alt="All Inputs Valid"
                />
              ) : (
                <p>1</p>
              )}
            </div>
            <p>Personal information</p>
          </div>
          <div className="line2"></div>
          <div className="chessExp">
            <div className="secondStep">
              <p>2</p>
            </div>
            <p>Chess experience</p>
          </div>
        </div>

        <div className="personal-information">
          <div className="header">
            <h2>Personal information</h2>
            <p>This Is Basic Information Fields</p>
          </div>

          <form>
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleInputChange}
                className={`personal-info ${
                  formErrors.name ? "error-input" : ""
                }`}
                onClick={handleClick}
              />
              {activeError === "name" && formErrors.name && (
                <div className="error-div" style={{ display: "block" }}>
                  <div className="top-part">
                    <div className="invalid-part">
                      <img
                        src={errorIcon}
                        className="error-icon"
                        alt="Error Icon"
                      />
                      <p>Invalid Name</p>
                    </div>
                    <button type="button">
                      <img src={x} alt="X" />
                    </button>
                  </div>
                  <div className="line3"></div>
                  <p className="error-text">{formErrors.name}</p>
                </div>
              )}
              {formErrors.name === "" && formData.name && (
                <img
                  src={greenCheck}
                  className="valid-check"
                  alt="Valid Input"
                />
              )}
            </div>

            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                placeholder="Email address *"
                value={formData.email}
                onChange={handleInputChange}
                className={`personal-info ${
                  formErrors.email ? "error-input" : ""
                }`}
                onClick={handleClick}
              />
              {activeError === "email" && formErrors.email && (
                <div className="error-div" style={{ display: "block" }}>
                  <div className="top-part">
                    <div className="invalid-part">
                      <img
                        src={errorIcon}
                        className="error-icon"
                        alt="Error Icon"
                      />
                      <p>Invalid email</p>
                    </div>
                    <button type="button">
                      <img src={x} alt="X" />
                    </button>
                  </div>
                  <div className="line3"></div>
                  <p className="error-text">Please enter valid email address</p>
                </div>
              )}
              {formErrors.email === "" && formData.email && (
                <img
                  src={greenCheck}
                  className="valid-check"
                  alt="Valid Input"
                />
              )}
            </div>

            <div className="input-wrapper">
              <input
                type="tel"
                name="phone"
                placeholder="Phone number *"
                value={formData.phone}
                onChange={handleInputChange}
                className={`personal-info ${
                  formErrors.phone ? "error-input" : ""
                }`}
                onClick={handleClick}
              />
              {activeError === "phone" && formErrors.phone && (
                <div className="error-div" style={{ display: "block" }}>
                  <div className="top-part">
                    <div className="invalid-part">
                      <img
                        src={errorIcon}
                        className="error-icon"
                        alt="Error Icon"
                      />
                      <p>Invalid number</p>
                    </div>
                    <button type="button">
                      <img src={x} alt="X" />
                    </button>
                  </div>
                  <div className="line3"></div>
                  <p className="error-text">{formErrors.phone}</p>
                </div>
              )}
              {formErrors.phone === "" && formData.phone && (
                <img
                  src={greenCheck}
                  className="valid-check"
                  alt="Valid Input"
                />
              )}
            </div>

            <div className="input-wrapper">
              <DatePicker
                selected={formData.dob}
                onChange={(date) => {
                  setFormData({ ...formData, dob: date });
                  validateField("dob", date);
                }}
                dateFormat="yyyy-MM-dd"
                placeholderText="Date of birth *"
                className={`personal-info ${
                  formErrors.dob ? "error-input" : ""
                } personal-info4 `}
                showYearDropdown
                yearDropdownItemNumber={15}
                scrollableYearDropdown
                onClick={handleClick}
              />
              {activeError === "dob" && formErrors.dob && (
                <div className="error-div" style={{ display: "block" }}>
                  <div className="top-part">
                    <div className="invalid-part">
                      <img
                        src={errorIcon}
                        className="error-icon"
                        alt="Error Icon"
                      />
                      <p>Invalid date</p>
                    </div>
                    <button type="button">
                      <img src={x} alt="X" />
                    </button>
                  </div>
                  <div className="line3"></div>
                  <p className="error-text">{formErrors.dob}</p>
                </div>
              )}
              {formErrors.dob === "" && formData.dob && (
                <img
                  src={greenCheck}
                  className="valid-check"
                  alt="Valid Input"
                />
              )}
            </div>
          </form>

          <div className="buttons">
            <button className="back-btn" onClick={handleBack}>
              Back
            </button>
            <button className="next-btn" onClick={handleNext}>
              Next
              <img src={rightArrow} alt="Right Arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
