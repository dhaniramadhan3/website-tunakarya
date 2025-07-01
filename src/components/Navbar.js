// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { UserContext } from '../context/UserContext';

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="prakerja-navbar">
      <div className="prakerja-navbar-container">
        <Link to="/" className="prakerja-logo">
          <img src="/hitam.png" alt="SIPETRA Logo" className="navbar-logo" />
        </Link>
        <div className="prakerja-navbar-links">
          <Link to="/online">Pelaksanaan Pelatihan Online</Link>
          <span className="prakerja-lang">
            <span style={{ color: '#dee0e3', margin: '0 5px' }}>|</span>
          </span>
          {!user ? (
            <>
              <Link to="/login" className="prakerja-btn-secondary">Masuk</Link>
              <Link to="/register" className="prakerja-btn-primary">Daftar Sekarang</Link>
            </>
          ) : (
            <>
              <span style={{ color: "white", fontWeight: 500 }}>
                Halo, {user.nama}
              </span>
              <button onClick={handleLogout} className="prakerja-btn-secondary">Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
