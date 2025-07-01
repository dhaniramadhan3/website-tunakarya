import React from "react";
import { useNavigate } from "react-router-dom";

const programs = [
  { id: 1, name: "Pelatihan Digital Marketing" },
  { id: 2, name: "Pelatihan Data Analyst" },
  { id: 3, name: "Pelatihan Desain Grafis" },
];

function ProgramList() {
  const navigate = useNavigate();
  const handleSelect = (id) => {
    navigate("/jadwal", { state: { programId: id } });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Pilih Program Pelatihan</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {programs.map((prog) => (
          <li
            key={prog.id}
            onClick={() => handleSelect(prog.id)}
            style={{
              margin: "1rem 0",
              padding: "1rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              cursor: "pointer",
              background: "#f3f6fb"
            }}
          >
            {prog.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgramList;