import React from 'react'

const FAQCard = ({data, activeId, onToggle}) => {
    const  {id, question, answer} = data;
  return (
    <li className='faq-card'>
      <div>
        <p>{question}</p>
        {activeId && <p>{answer}</p>}
      </div>
      <button onClick={onToggle} className={activeId ? "close":"show" }>{activeId ? "Close":"Show" }</button>
    </li>
  )
}

export default FAQCard
