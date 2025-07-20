import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/LOGO_NAV.png";
import "./navbar.css";

const navItems = [
  
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
];

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar className="navbar-toolbar">
          {/* Logo con scroll al top */}
          <Box component="a" href="#" className="navbar-logo">
            <img src={logo} alt="Logo Wuiders" style={{ height: "40px" }} />
          </Box>

          {/* Desktop links */}
          {!isMobile && (
            <Box className="navbar-links">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  component="a"
                  href={item.href}
                  color="inherit"
                >
                  {item.label}
                </Button>
              ))}
              <button
                className="hero-button"
                onClick={() =>
                  document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                SOLICITAR PRESUPUESTO
              </button>
            </Box>
          )}

          {/* Icono menú mobile */}
          {isMobile && (
            <IconButton edge="end" onClick={toggleDrawer} color="inherit">
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer Mobile */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <Button
                  component="a"
                  href={item.href}
                  fullWidth
                  color="inherit"
                  sx={{ justifyContent: "flex-start", padding: "8px 16px" }}
                >
                  {item.label}
                </Button>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <Button
                variant="contained"
                onClick={() =>
                  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
                }
                fullWidth
                sx={{ justifyContent: "flex-start", padding: "8px 16px" }}
              >
                Solicitar Presupuesto
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
