import React from "react";



function Accordion(props) {

/*   // useState to handle text on click
const [title, setTitle] = useState(false); */

const isOpen = props.index === props.currOpen;

function titleHandler(){
  // setTitle((title) => !title)
  props.setCurrOpen(isOpen ? null : props.index)
}

  return (
    <div onClick={titleHandler} className={`item ${isOpen ? 'open text' : ''}`}>
      <p className="number">
        {props.index < 9 ? `0${props.index + 1}` : props.index + 1}
      </p>
      <p className="text">{props.title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>

      {isOpen && <div className="content-box">{props.text}</div>}

    </div>
  );
}

export default Accordion;
