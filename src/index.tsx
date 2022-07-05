import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css/normalize.css';
import './index.css';
import {App} from './components/App';
import reportWebVitals from './reportWebVitals';
import './models/init';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
