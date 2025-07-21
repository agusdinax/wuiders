import {
  Typography,
  Box,
  Paper
} from "@mui/material";
import WebIcon from "@mui/icons-material/Public";
import FrontendIcon from "@mui/icons-material/Code";
import SpeedIcon from "@mui/icons-material/Speed";
import BalanceIcon from '@mui/icons-material/Balance';
import StrategyIcon from "@mui/icons-material/Lightbulb";
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./Servicios.css";

const servicios = [
  {
    titulo: "Sitios web estáticos",
    descripcion:
      "Páginas informativas con diseño responsive para mostrar tu marca de forma clara y profesional.",
    icono: <WebIcon className="icono-servicio" />,
  },
  {
    titulo: "Aplicaciones web dinámicas",
    descripcion:
      "Soluciones interactivas a medida: menús digitales, sistemas de pedidos y control diario desde cualquier dispositivo.",
    icono: <AutoAwesomeMotionIcon className="icono-servicio" />,
  },
  {
    titulo: "Sistemas de gestión comercial",
    descripcion:
      "Organizá tu negocio con herramientas para turnos, delivery, stock y tareas, pensadas para emprendedores y comercios.",
    icono: <ShoppingBasketIcon className="icono-servicio" />,
  },
  {
    titulo: "Sistema de venta con balanza",
    descripcion:
      "Software conectado a balanzas comerciales (como Systel), ideal para panaderías, dietéticas, verdulerías y más.",
    icono: <BalanceIcon className="icono-servicio" />,
  },
  {
    titulo: "Ventas por WhatsApp",
    descripcion:
      "Sistemas que permiten recibir pedidos y gestionar ventas directamente desde WhatsApp, de forma rápida y ordenada.",
    icono: <WhatsAppIcon className="icono-servicio" />,
  },
  {
    titulo: "Diseño profesional y moderno",
    descripcion:
      "Interfaces modernas con excelente rendimiento y experiencia de usuario.",
    icono: <FrontendIcon className="icono-servicio" />,
  },
  {
    titulo: "Mantenimiento y soporte",
    descripcion:
      "Soporte técnico continuo, actualizaciones y mejoras para que tu sistema esté siempre funcionando correctamente y de acuerdo a tus necesidades.",
    icono: <SpeedIcon className="icono-servicio" />,
  },
  {
    titulo: "Consultoría y estrategia",
    descripcion:
      "Te asesoramos para optimizar tus procesos y ventas usando tecnología adaptada a tu rubro y tus clientes.",
    icono: <StrategyIcon className="icono-servicio" />,
  },
];

const Servicios = () => {
  return (
    <section className="servicios" id="servicios">
      <div className="servicios-header">
        <Typography variant="h2" component="h2" className="titulo-principal">
          Nuestros <span>Servicios</span>
        </Typography>
        <Typography variant="h6" className="subtitulo-servicios">
          Soluciones digitales para tu negocio: sistemas de pedidos, menús online, gestión con balanza, tareas diarias, y más. Todo personalizado para tu empresa.
        </Typography>
      </div>

      <div className="servicios-grid">
        {servicios.map((servicio, index) => (
          <Paper key={index} elevation={3} className="servicio-card">
            <Box className="servicio-icono">{servicio.icono}</Box>
            <Typography variant="h6" component="h3">
              {servicio.titulo}
            </Typography>
            <Typography variant="body2">{servicio.descripcion}</Typography>
          </Paper>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
