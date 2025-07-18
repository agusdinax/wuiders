import React, { useState } from "react";
import "./ProyectoDetalleModal.css";

interface ProyectoDetalleModalProps {
  proyecto: {
    titulo: string;
    detalles: string[];
    imagenes: string[];
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

        <h2>{proyecto.titulo}</h2>
        <p>
          Este panel permite a los emprendedores gestionar sus pedidos diarios en tiempo real. Incluye funcionalidades como:
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
