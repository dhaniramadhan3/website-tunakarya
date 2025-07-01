import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import './Pelatihan.css';

function Pelatihan() {
  const navigate = useNavigate();

  const programPelatihan = [
    {
      judul: "Analisis Sistem Informasi",
      deskripsi: "Pelatihan tentang cara menganalisis kebutuhan sistem, alur data, dan spesifikasi teknis sistem informasi.",
      durasi: "4 Minggu",
      harga: 500000
    },
    {
      judul: "Pengembangan Aplikasi Web",
      deskripsi: "Pelatihan untuk membangun aplikasi berbasis web menggunakan HTML, CSS, JavaScript, dan framework modern.",
      durasi: "5 Minggu",
      harga: 600000
    },
    {
      judul: "Manajemen Proyek TI",
      deskripsi: "Pelatihan bagaimana merancang, mengelola, dan mengevaluasi proyek teknologi informasi menggunakan tools seperti Gantt chart dan SCRUM.",
      durasi: "3 Minggu",
      harga: 450000
    },
    {
      judul: "Keamanan Sistem Informasi",
      deskripsi: "Pelatihan mengenal ancaman digital dan cara mengamankan sistem informasi perusahaan.",
      durasi: "2 Minggu",
      harga: 400000
    }
  ];

  const handleDaftar = (item) => {
    const data = {
      judul: item.judul,
      harga: item.harga
    };
    localStorage.setItem("pelatihanTerpilih", JSON.stringify(data));
    navigate("/pembayaran");
  };

  return (
    <div className="home-page">
      <h2 className="judul-pelatihan">Pelaksanaan Pelatihan Online</h2>

      <div className="pelatihan-list">
        {programPelatihan.map((item, index) => (
          <div key={index} className="pelatihan-card">
            <h3>{item.judul}</h3>
            <p>{item.deskripsi}</p>
            <p><strong>Durasi:</strong> {item.durasi}</p>
            <p><strong>Harga:</strong> Rp {item.harga.toLocaleString('id-ID')}</p>
            <button
              className="btn-daftar"
              onClick={() => handleDaftar(item)}
            >
              Daftar Pelatihan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pelatihan;
