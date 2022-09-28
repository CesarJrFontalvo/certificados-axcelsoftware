import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../view/Home';
import Header from '../components/Header';
import Pdf from '../components/Pdf';
import CertificadoPago from '../view/CertificadoPago';
import CertificadoLaboral from '../view/CertificadiLaboral';

const AppRouter = () => {
  return (
      <div>

 <BrowserRouter>
 <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificado-laboral" element={<CertificadoLaboral/>} />
          <Route path="/certificado-pago" element={<CertificadoPago/> }/>
          <Route path="/pdf" element={<Pdf/> }/>
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
  </BrowserRouter>
      </div>

  )
};

export default AppRouter;