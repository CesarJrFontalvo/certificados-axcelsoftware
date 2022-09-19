import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import App from './App';
import AppRouter from './routers/AppRouter';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <AppRouter />
  </React.StrictMode>
);


