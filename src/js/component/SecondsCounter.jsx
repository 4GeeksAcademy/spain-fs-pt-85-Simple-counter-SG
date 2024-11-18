import React from "react";
import PropTypes from "prop-types";

//create your first component
const SecondsCounter = (props) => {
  return (
    <div
      className="counter container-fluid" style={{display: "inline-flex",fontSize: "60px", backgroundColor: "black",color: "white",padding: "20px",
	  justifyContent: "center",lineHeight: "60px",}}>
      <div className="icon" style={{ position: "relative", right: "240px" }}><i className="fa-regular fa-clock"></i> </div>
      <div className="six" style={{ position: "relative", right: "150px" }}>{props.digitSix}</div>
      <div className="five" style={{ position: "relative", right: "100px" }}> {props.digitFive}</div>
      <div className="four" style={{ position: "relative", right: "50px" }}>{props.digitFour}</div>
      <div className="three" style={{ position: "relative", right: "5px" }}>{props.digitThree}</div>
      <div className="two" style={{ position: "relative", left: "43px" }}>{props.digitTwo}</div>
      <div className="one" style={{ position: "relative", left: "90px" }}>{props.digitOne} </div>
    </div>
  );
};

SecondsCounter.propTypes = {
  digitSix: PropTypes.number,
  digitFive: PropTypes.number,
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
};

export default SecondsCounter;
