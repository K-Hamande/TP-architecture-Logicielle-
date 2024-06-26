import React, { useState } from 'react';
import Sender from './components/Sender';
import Receiver from './components/Receiver';

function App() {
  const [message, setMessage] = useState('');

  const handleSendMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <Sender onSendMessage={handleSendMessage} />
      {message && <Receiver message={message} />}
    </div>
  );
}

export default App;
