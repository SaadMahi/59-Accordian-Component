import React from "react";
import Accordion from "./AccordianHtml/Accordion";

function AccordionItem(props) {
  return (
    <div className="accordion">
      {props.faqList.map((items, index) => (
        <Accordion
          key={index}
          title={items.title}
          text={items.text}
          index={index}
        />
      ))}
    </div>
  );
}

export default AccordionItem;
