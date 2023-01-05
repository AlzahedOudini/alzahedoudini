import React, { useState }  from 'react';

function ZeOne() {
  const [isSending, setisSending] = useState(false);
  const [isSent, setisSent] = useState(false);

  const handleClick = () =>{
    setisSending(true);
    setTimeout(() =>{
      setisSending(false);
      setisSent(true);
      setTimeout(() =>{ setisSent(false) },2500)
    }, 2000);
  }
  return (
    <button onClick={handleClick} className={isSending || isSent ? "Sending" : ""}>
      <span>

      </span>
    </button>
  )
}

export default ZeOne;
