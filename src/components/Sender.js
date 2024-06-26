import React, { useState } from 'react';
import './Sender.css';

function Sender({ onSendMessage }) {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    onSendMessage(input);
    setInput('');
  };

  return (
    <div className="sender-container">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="sender-input"
      />
      <button onClick={handleSend} className="sender-button">Envoyer un message</button>
    </div>
  );
}

export default Sender;
