import React, { useEffect, useState } from "react";
import faq from "../api/faq.json";
import FAQCard from "./UI/FAQCard";

const Accordion = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  useEffect(() => {
    setData(faq);
  });

  const handdleButton = (id) => {
    setActiveId((prevId) => (prevId===id ? false : id));
  };

  return (
    <div className="accordion-main-container">
      <h1>Accordion in React</h1>
      <ul>
        {faq.map((currEle) => {
          return (
            <FAQCard
              key={currEle.id}
              data={currEle}
              activeId={activeId === currEle.id}
              onToggle={() => handdleButton(currEle.id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;


