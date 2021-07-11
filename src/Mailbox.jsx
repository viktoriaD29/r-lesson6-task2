import React from 'react';
import ReactDOM from 'react-dom'

const Mailbox = ({ undeadMessages }) => {
  return (
    <div className="mailbox">
      <span className="mailbox__text">Messages</span>
      {undeadMessages.length > 0 && (
        <span className="mailbox__count">{undeadMessages.length}</span>
      )}
    </div>
  );
};

export default Mailbox;
