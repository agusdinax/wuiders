import "./Servicios.css";
import WebIcon from "@mui/icons-material/Public";
import AppIcon from "@mui/icons-material/Devices";
import FrontendIcon from "@mui/icons-material/Code";
import SpeedIcon from "@mui/icons-material/Speed";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import StrategyIcon from "@mui/icons-material/Lightbulb";
import BusinessIcon from "@mui/icons-material/BusinessCenter";

const servicios = [
  {
    titulo: "Desarrollo de Sitios Web Estáticos",
    descripcion:
      "Páginas web informativas con HTML y CSS. Diseño adaptable a todos los dispositivos.",
    icono: <WebIcon className="icono-servicio" />,
  },
  {
    titulo: "Aplicaciones Web Dinámicas",
    descripcion:
      "Apps interactivas con React y JS. Interfaces modernas y enrutamiento eficiente.",
    icono: <AppIcon className="icono-servicio" />,
  },
  {
    titulo: "Desarrollo Frontend",
    descripcion:
      "Componentes reutilizables en React, integración de APIs, y foco en accesibilidad.",
    icono: <FrontendIcon className="icono-servicio" />,
  },
  {
    titulo: "Optimización y Mantenimiento Web",
    descripcion:
      "Velocidad, rendimiento, SEO básico y mantenimiento continuo para tu web.",
    icono: <SpeedIcon className="icono-servicio" />,
  },
  {
    titulo: "Diseño UI/UX",
    descripcion:
      "Interfaces intuitivas y atractivas, con enfoque en la experiencia de usuario.",
    icono: <DesignServicesIcon className="icono-servicio" />,
  },
  {
    titulo: "Consultoría y Estrategia Digital",
    descripcion:
      "Te asesoramos para mejorar tu presencia digital y procesos con soluciones personalizadas.",
    icono: <StrategyIcon className="icono-servicio" />,
  },
  {
    titulo: "Sistemas para Pedidos y Procesos",
    descripcion:
      "Plataformas para pedidos online, turnos, toma de pedidos por WhatsApp e inventarios.",
    icono: <BusinessIcon className="icono-servicio" />,
  },
];

const Servicios = () => {
  return (
    <section className="servicios">
      <div className="servicios-header">
        <h2>Nuestros Servicios</h2>
        <p>
          Ofrecemos una amplia gama de servicios para satisfacer todas sus necesidades. Desde el diseño web hasta sistemas conectados con WhatsApp.
        </p>
      </div>

      <div className="servicios-grid">
        {servicios.map((servicio, index) => (
          <div key={index} className="servicio-card">
            <div className="servicio-icono">{servicio.icono}</div>
            <h3>{servicio.titulo}</h3>
            <p>{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
