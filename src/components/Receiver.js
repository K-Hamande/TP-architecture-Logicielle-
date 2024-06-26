import React from 'react';
import './Receiver.css';

function Receiver({ message }) {
  return (
    <div className="receiver-container">
      
      <h2> message :</h2> <p className="receiver-message">{message || ''}</p> {/* Affichage d'un message par défaut si aucun message n'est reçu */}
    </div>
  );
}

export default Receiver;
