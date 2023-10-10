import React, { useState } from 'react';
import Accordion from './AccordianHtml/Accordion';

function AccordionItem(props) {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className='accordion'>
      {props.faqList.map((items, index) => (
        <Accordion
          currOpen={currOpen}
          setCurrOpen={setCurrOpen}
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
