import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Alert,
  CircularProgress,
  Grid,
  Divider,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

import emailjs from "emailjs-com";

import "./ContactoForm.css";

const ContactoForm = () => {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<
    { type: "error" | "success"; message: string } | null
  >(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    const serviceID = "tu_service_id";
    const templateID = "tu_template_id";
    const userID = "tu_public_key";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setFeedback({ type: "success", message: "Mensaje enviado correctamente. ¡Gracias!" });
        setFormData({ nombre: "", email: "", mensaje: "" });
      })
      .catch(() => {
        setFeedback({
          type: "error",
          message: "Error al enviar el mensaje. Inténtalo más tarde.",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box className="contacto-container">
      <Grid container spacing={6} alignItems="center">
        {/* Info Izquierda */}
        <Grid item xs={12} md={5} className="info-contacto">
          <Typography variant="h4" gutterBottom fontWeight="bold">
            NUESTRAS UBICACIONES
          </Typography>
          <Box className="info-item">
            <LocationOnIcon className="icono" />
            <Typography variant="body1">Mar del Plata, Provincia de Buenos Aires</Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            TELÉFONOS
          </Typography>
          <Box className="info-item">
            <PhoneIcon className="icono" />
            <Typography variant="body1">+54 11 6790 3131</Typography>
          </Box>
          <Box className="info-item">
            <WhatsAppIcon className="icono whatsapp" />
            <Typography variant="body1">+54 11 6790 3131</Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            REDES SOCIALES
          </Typography>
          <Box className="info-item">
            <InstagramIcon className="icono instagram" />
            <Typography variant="body1">@bsdesarrollos</Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            EMAIL
          </Typography>
          <Box className="info-item">
            <Typography variant="body1">info@bsdesarrollos.com.ar</Typography>
          </Box>
        </Grid>

        {/* Formulario Derecho */}
        <Grid item xs={12} md={7}>
          <Typography variant="h4" gutterBottom fontWeight="bold" textAlign={{ xs: "center", md: "left" }}>
            CONTACTO
          </Typography>
          <Typography variant="subtitle1" mb={3} textAlign={{ xs: "center", md: "left" }}>
            Póngase en contacto con nosotros
          </Typography>

          <Box component="form" onSubmit={handleSubmit} className="form-contacto">
            <TextField
              label="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              fullWidth
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />

            <TextField
              label="Mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              fullWidth
              multiline
              rows={5}
            />

            <Button
              variant="contained"
              type="submit"
              disabled={loading}
              size="large"
              sx={{ mt: 2 }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : "Enviar"}
            </Button>

            {feedback && (
              <Alert severity={feedback.type} onClose={() => setFeedback(null)} sx={{ mt: 2 }}>
                {feedback.message}
              </Alert>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactoForm;
