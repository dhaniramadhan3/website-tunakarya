import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import './Pelatihan.css';

function Pembayaran() {
  const [pelatihan, setPelatihan] = useState({ judul: "", harga: 0 });
  const [sudahBayar, setSudahBayar] = useState(false);
  const [bukti, setBukti] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("pelatihanTerpilih"));
    if (data) setPelatihan(data);
  }, []);

  const handleBayar = (e) => {
    e.preventDefault();
    setSudahBayar(true);
  };

  const handleUpload = (e) => {
    setBukti(e.target.files[0]);
  };

  const handleSelesai = () => {
    alert("✅ Bukti pembayaran berhasil diupload.");
    navigate("/online");
  };

  return (
    <div className="home-page">
      <h2 className="judul-pelatihan" style={{ color: 'white' }}>Pembayaran Pelatihan</h2>

      <div className="pelatihan-card" style={{ margin: '0 auto', color: 'white' }}>
        <h3 style={{ color: 'white' }}>{pelatihan.judul}</h3>
        <p>Total Biaya: <strong style={{ color: 'white' }}>Rp {pelatihan.harga.toLocaleString('id-ID')}</strong></p>

        <div className="register-form" style={{ marginBottom: '20px' }}>
          <input
            type="text"
            value="SIPETRA PELATIHAN"
            readOnly
            style={{
              backgroundColor: '#fff',
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center',
              border: '2px solid #2b5ae1',
              borderRadius: '10px',
              padding: '12px',
              marginBottom: '10px'
            }}
          />
          <input
            type="text"
            value="987654321001"
            readOnly
            style={{
              backgroundColor: '#fff',
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center',
              border: '2px solid #2b5ae1',
              borderRadius: '10px',
              padding: '12px'
            }}
          />
        </div>

        {!sudahBayar ? (
          <form onSubmit={handleBayar} className="register-form">
            <button type="submit" className="prakerja-btn-primary">
              Bayar Sekarang
            </button>
          </form>
        ) : (
          <>
            <p style={{ color: 'white', marginTop: '20px' }}>
              ✅ Pembayaran pelatihan online berhasil
            </p>
            <p><strong style={{ color: 'white' }}>Silakan upload bukti pembayaran di bawah ini:</strong></p>
            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={handleUpload}
              style={{ marginBottom: '10px' }}
            />
            {bukti && (
              <>
                <p style={{ fontSize: '0.9rem', color: 'white' }}>📎 {bukti.name}</p>
                <button
                  onClick={handleSelesai}
                  className="prakerja-btn-primary"
                  style={{ marginTop: '10px' }}
                >
                  OK
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Pembayaran;
