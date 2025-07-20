import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import BalanceIcon from '@mui/icons-material/Balance';
import BuildIcon from "@mui/icons-material/Build";

import headerImage from "../../assets/LOGO_NAV.png";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <Box className="hero-container">
        <Box className="hero-content">
          <Typography variant="subtitle1" className="hero-subtitle">
            SOLUCIONES INFORMÁTICAS
          </Typography>
          <Typography variant="h2" className="hero-title">
             Desarrollo <span>Web</span> y <span>Sistemas</span> personalizados
          </Typography>
          <button className="hero-button" onClick={() => window.location.href = '#servicios'}>
              SERVICIOS
            </button>
        </Box>
        <img src={headerImage} alt="Soporte IT" className="hero-image" />
      </Box>

  {/* Servicios Cards superpuestos sin Grid */}
      <Box className="services-flex">
  {/* Desarrollo Web */}
  <Paper elevation={3} className="service-card">
    <Box className="icon-wrapper">
      <LanguageIcon className="service-icon" /> {/* Mundo web */}
    </Box>
    <Typography variant="h6" className="service-title">
      PÁGINAS WEB A MEDIDA
    </Typography>
    <Typography variant="body2" className="service-desc">
      Diseñamos y desarrollamos sitios web modernos, rápidos y adaptados a las necesidades de tu negocio.
    </Typography>
  </Paper>

  {/* Sistemas a medida */}
  <Paper elevation={3} className="service-card">
    <Box className="icon-wrapper">
      <SettingsApplicationsIcon className="service-icon" /> {/* Icono de sistema */}
    </Box>
    <Typography variant="h6" className="service-title">
      SISTEMAS PERSONALIZADOS
    </Typography>
    <Typography variant="body2" className="service-desc">
      Creamos sistemas a medida para gestión de pedidos, turnos, inventario y procesos internos de tu empresa o emprendimiento.
    </Typography>
  </Paper>

  <Paper elevation={3} className="service-card">
    <Box className="icon-wrapper">
      <BalanceIcon className="service-icon" />
    </Box>
    <Typography variant="h6" className="service-title">
      SISTEMA DE VENTA CON BALANZA
    </Typography>
    <Typography variant="body2" className="service-desc">
      Software conectado a balanzas electrónicas que permite registrar ventas por peso o unidad.
    </Typography>
  </Paper>

  {/* Consultoría IT */}
  <Paper elevation={3} className="service-card">
    <Box className="icon-wrapper">
      <BuildIcon className="service-icon" /> 
    </Box>
    <Typography variant="h6" className="service-title">
      CONSULTORÍA E IMPLEMENTACIÓN DE SISTEMAS
    </Typography>
    <Typography variant="body2" className="service-desc">
      Te acompañamos en la digitalización de tu negocio con asesoramiento IT y soluciones tecnológicas a medida.
    </Typography>
  </Paper>
</Box>
    </>
  );
};

export default Header;
