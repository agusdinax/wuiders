import { useState } from "react";
import "./Proyectos.css";
import { proyectosData } from "../../data/proyectosData";
import ProyectoDetalleModal from "../Proyectos/ProyectoDetalleModal";
import {Typography} from "@mui/material";
const Proyectos = () => {
  const [proyectoActivo, setProyectoActivo] = useState<number | null>(null);

  return (
    <section className="proyectos-container">
      <Typography variant="h2" component="h2" className="titulo-principal">
        Nuestros <span>Proyectos</span>
      </Typography>
      <Typography variant="h6" className="subtitulo-servicios">
        Algunos de los trabajos realizados: sitios web, sistemas de gestión, soluciones para comercios y herramientas conectadas como ventas con balanza.
      </Typography>
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
