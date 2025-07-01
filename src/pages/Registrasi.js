// src/pages/Registrasi.js
import React, { useState } from 'react';
import './Home.css';      // pakai background biru
import './Register.css';  // opsional styling tambahan

function Registrasi() {
  const [form, setForm] = useState({
    nama: '',
    email: '',
    password: '',
    konfirmasiPassword: ''
  });
  const [pesan, setPesan] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.konfirmasiPassword) {
      setPesan("Password dan konfirmasi password tidak sama!");
      return;
    }

    const userData = {
      nama: form.nama,
      email: form.email,
      password: form.password
    };

    localStorage.setItem("user", JSON.stringify(userData));

    setPesan("Registrasi berhasil! Silakan login.");
    setForm({ nama: '', email: '', password: '', konfirmasiPassword: '' });
  };

  return (
    <div className="home-page">
      <h2>Buat Akun SIPETRA</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          name="nama"
          placeholder="Nama Lengkap"
          value={form.nama}
          onChange={handleChange}
          required
        />
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
        <input
          type="password"
          name="konfirmasiPassword"
          placeholder="Konfirmasi Password"
          value={form.konfirmasiPassword}
          onChange={handleChange}
          required
        />
        <button type="submit" className="prakerja-btn-primary">Daftar</button>
      </form>
      {pesan && <p style={{ color: "yellow" }}>{pesan}</p>}
    </div>
  );
}

export default Registrasi;
