import { useState } from "react";
import "./Proyectos.css";
import { proyectosData } from "../../data/proyectosData";
import ProyectoDetalleModal from "../Proyectos/ProyectoDetalleModal";

const Proyectos = () => {
  const [proyectoActivo, setProyectoActivo] = useState<number | null>(null);

  return (
    <section className="proyectos-container">
      <h2>Nuestros Proyectos</h2>
      <div className="proyectos-grid">
        {proyectosData.map((proyecto, i) => (
          <div key={i} className="proyecto-card" onClick={() => setProyectoActivo(i)}>
            <img src={proyecto.imagenes[0]} alt={proyecto.titulo} />
            <div className="proyecto-info">
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <span className="ver-mas">Ver Proyecto →</span>
            </div>
          </div>
        ))}
      </div>

      {proyectoActivo !== null && (
        <ProyectoDetalleModal
          proyecto={proyectosData[proyectoActivo]}
          onClose={() => setProyectoActivo(null)}
        />
      )}
    </section>
  );
};

export default Proyectos;
