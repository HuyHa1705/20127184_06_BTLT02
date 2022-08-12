import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Firstpage from './firstpage';
import Forgot from './forgot';
import Password from './changepassword';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Firstpage />} />
      <Route path='/forgot' element={<Forgot />} />
      <Route path='/changepass' element={<Password />} />
    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
