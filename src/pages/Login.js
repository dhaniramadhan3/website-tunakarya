import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import './Home.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [pesan, setPesan] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setPesan("Belum ada akun. Silakan daftar dulu.");
      return;
    }

    if (
      storedUser.email === form.email &&
      storedUser.password === form.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(storedUser));
      setUser(storedUser); // ✅ Trigger update navbar
      navigate('/');
    } else {
      setPesan("Email atau password salah.");
    }
  };

  return (
    <div className="home-page">
      <h2>Masuk ke SIPETRA</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="email"
          name="email"
          placeholder="Alamat Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="prakerja-btn-primary">Masuk</button>
      </form>
      {pesan && <p style={{ color: "yellow" }}>{pesan}</p>}
    </div>
  );
}

export default Login;
