import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from '@/pages/index';
import CryptoCurrencyPage from '@/pages/CryptoCurrencyPage';
import Error404 from '@/pages/Error404';
import Login from "@/pages/Private/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="login" element={<Login />} />
        <Route path="cryptocurrency" element={<CryptoCurrencyPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
