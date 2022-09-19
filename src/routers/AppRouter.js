import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Pdf from '../components/Pdf';
import ViewPdf from '../components/ViewPdf';

const AppRouter = () => {
  return (
      <div>

 <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/view-pdf" element={<ViewPdf/> }/>
          <Route path="pdf" element={<Pdf/> }/>
        </Routes>
  </BrowserRouter>
      </div>

  )
};

export default AppRouter;