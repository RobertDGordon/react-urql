import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createClient, Provider } from 'urql';

const client = createClient({
    url: 'https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn'
  });

ReactDOM.render(<Provider value={client}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
