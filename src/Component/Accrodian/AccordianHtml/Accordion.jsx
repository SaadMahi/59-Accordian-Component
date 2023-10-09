import React, { useState } from "react";



function Accordion(props) {

  // useState to handle text on click
const [title, setTitle] = useState(false);

function titleHandler(){
  setTitle((title) => !title)
}

  return (
    <div onClick={titleHandler} className={`item ${title ? 'open text' : ''}`}>
      <p className="number">
        {props.index < 9 ? `0${props.index + 1}` : props.index + 1}
      </p>
      <p className="text">{props.title}</p>
      <p className="icon">{title ? '-' : '+'}</p>

      {title && <div className="content-box">{props.text}</div>}

    </div>
  );
}

export default Accordion;
