import React, { useState } from "react";
import "./ProyectoDetalleModal.css";
import {Typography} from "@mui/material";
interface ProyectoDetalleModalProps {
  proyecto: {
    titulo: string;
    detalles: string[];
    imagenes: string[];
    descripcion: string;
    link: string;
  };
  onClose: () => void;
}

const ProyectoDetalleModal = ({ proyecto, onClose }: ProyectoDetalleModalProps) => {
  const [imagenAmpliada, setImagenAmpliada] = useState<string | null>(null);

  const cerrarLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImagenAmpliada(null);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-detalle">
        <button className="cerrar-modal" onClick={onClose}>×</button>
      <Typography variant="h2" component="h2" className="titulo-principal">
        {proyecto.titulo}
      </Typography>
        <p>
          {proyecto.descripcion}
        </p>
        <ul>
          {proyecto.detalles.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>Screenshots del proyecto:</h3>
        <div className="screenshots-grid">
          {proyecto.imagenes.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Vista ${i + 1}`}
              onClick={() => setImagenAmpliada(img)}
              className="miniatura"
            />
          ))}
        </div>

        <a
          className="btn-visitar"
          href={proyecto.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitar Web
        </a>
      </div>

      {imagenAmpliada && (
        <div className="lightbox" onClick={cerrarLightbox}>
          <div className="lightbox-contenido" onClick={(e) => e.stopPropagation()}>
            <button
              className="cerrar-lightbox"
              onClick={cerrarLightbox}
            >
              ×
            </button>
            <img
              src={imagenAmpliada}
              alt="Vista ampliada"
              className="imagen-ampliada"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProyectoDetalleModal;
