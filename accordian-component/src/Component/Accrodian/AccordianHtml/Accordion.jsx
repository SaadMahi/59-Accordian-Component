import React from "react";

function Accordion(props) {
  return (
    <div className="item">
      <p className="number">
        {props.index < 9 ? `0${props.index + 1}` : props.index + 1}
      </p>
      <p className="text">{props.title}</p>
      <p className="icon">-</p>
      <div className="content-box">{props.text}</div>
    </div>
  );
}

export default Accordion;
