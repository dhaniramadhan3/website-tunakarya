import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="prakerja-hero-bg">
      <div className="prakerja-hero-content">
        <div className="prakerja-hero-text">
          <h1>Gali potensi dirimu<br />dengan <span className="highlight">SIPETRA</span></h1>
          <p>
            Galau cari kerja? Ingin lebih produktif? Mau nambah skill tanpa pusing memikirkan biaya?
            Ambil kesempatan dapatkan beasiswa pelatihan sesuai minatmu dan <b>#JadiBisa</b> bareng SIPETRA.
          </p>
         
        </div>
        <div className="prakerja-hero-people">
  <img
    src="/1.png"
    alt="Hero 1"
    className="prakerja-hero-img-left"
  />
  <img
    src="/2.png"
    alt="Hero 2"
    className="prakerja-hero-img-right"
  />
</div>
      </div>
    </div>
  );
}

export default Home;
