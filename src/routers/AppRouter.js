import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from '../App';
import App2 from '../App2';
import Header from '../components/Header';
import Pdf from '../components/Pdf';
import ViewPdf from '../components/ViewPdf';

const AppRouter = () => {
  return (
      <div>

 <BrowserRouter>
 <Header/>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home-pdf" element={<App2 />} />
          <Route path="/view-pdf" element={<ViewPdf/> }/>
          <Route path="/pdf" element={<Pdf/> }/>
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
  </BrowserRouter>
      </div>

  )
};

export default AppRouter;