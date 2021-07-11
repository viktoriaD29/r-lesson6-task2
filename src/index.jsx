import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Mailbox from './Mailbox.jsx';

const rootElemnt = document.querySelector('#root');

ReactDOM.render(<Mailbox undeadMessages={['g']}/>, rootElemnt);
