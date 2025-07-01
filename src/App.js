// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';  // <== Context Login
import Navbar from './components/Navbar';              // Navbar atas
import Home from './pages/Home';                       // Halaman utama
import Login from './pages/Login';                     // Halaman login
import Registrasi from './pages/Registrasi';           // Halaman registrasi
import Pelatihan from './pages/Pelatihan';             // Halaman pelatihan online
import Pembayaran from './pages/Pembayaran';
function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registrasi />} />
          <Route path="/online" element={<Pelatihan />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
