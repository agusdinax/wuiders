// src/data/proyectosData.ts
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
export const proyectosData = [
  {
    id: "menu-whatsapp",
    titulo: "Web con Menú y WhatsApp",
    descripcion: "Menú digital con carrito y formulario que envía el pedido directamente por WhatsApp con formato claro y amigable para quien lo recibe.",
    detalles: [
      "🛒 Carrito interactivo para sumar productos fácilmente",
      "📱 Envío directo a WhatsApp con mensaje estructurado y legible",
      "📋 Compatible con quienes reciben pedidos desde el celular",
      "🌐 Versión simple: menú estático para mostrar productos sin carrito",
      "⚙️ Adaptable a todo tipo de rubros: comida, tienda, pedidos por peso, etc.",
    ],
    imagenes: [img4, img5, img6],
    link: "https://tusitio.com/menu-whatsapp",
  }, 
  {
  id: "whatsapp-panel",
  titulo: "Panel de Pedidos por WhatsApp",
  descripcion: "Sistema web completo para recibir y gestionar pedidos enviados por WhatsApp, con paneles para el delivery, cocina y reportes en tiempo real.",
  detalles: [
    "📥 Recepción de pedidos desde WhatsApp con estructura clara",
    "📦 Panel diario para gestionar pedidos por estado y tipo de entrega",
    "🚚 Vista exclusiva para repartidores o cocina según el rol",
    "📊 Reportes automáticos e historial completo de pedidos",
    "📱 Adaptado para usar desde celular o escritorio sin instalar apps",
  ],
  imagenes: [img7, img8, img9],
  link: "https://tusitio.com/panel-whatsapp",
}, 
{
  id: "balansys",
  titulo: "Balansys - Gestión con Balanza",
  descripcion: "Sistema integral para gestionar ventas basadas en peso, conectado a balanzas electrónicas, con actualización automática de precios y panel administrativo para el dueño.",
  detalles: [
    "⚖️ Conexión directa con balanzas electrónicas para lectura precisa de peso",
    "💰 Actualización automática de precios según peso registrado",
    "📋 Panel administrativo para cargar productos, precios y controlar stock",
    "📊 Reportes detallados de ventas y métricas para optimizar el negocio",
    "📱 Acceso desde celular o computadora para monitoreo en tiempo real",
  ],
  imagenes: [img1, img2, img3],
  link: "https://tusitio.com/balansys",
},
{
  id: "feria-virtual-ropa",
  titulo: "Feria virtual de ropa",
  descripcion: "Plataforma web dinámica y responsive para exhibir prendas de ropa con consultas directas por WhatsApp, ideal para ferias virtuales y ventas desde celular o computadora.",
  detalles: [
    "👗 Visualización sencilla y ordenada de prendas en un solo lugar",
    "📲 Consulta rápida por WhatsApp para cada producto desde cualquier dispositivo",
    "⚙️ Gestión de productos mediante panel administrativo o datos estáticos",
    "🌐 Diseño adaptable para web y celulares, facilitando la experiencia de compra",
  ],
  imagenes: [img1, img2, img3],
  link: "https://between-hills-feria-virtual.vercel.app/",
},
{
  id: "conexion-sideral",
  titulo: "Web Institucional para Turismo",
  descripcion: "Sitio web moderno y responsive para mostrar el emprendimiento turístico Conexión Sideral, con información, fotos, eventos y contacto directo por WhatsApp.",
  detalles: [
    "🌄 Página estática profesional con diseño visual impactante",
    "📍 Secciones sobre el emprendimiento, actividades y ubicación",
    "📅 Calendario de eventos, experiencias y fechas destacadas",
    "🖼️ Galería de imágenes atractiva y adaptable a móvil",
    "📲 Botón de contacto que redirige al WhatsApp para consultas o reservas",
  ],
  imagenes: [img1, img2, img3],
  link: "https://tusitio.com/conexion-sideral",
}, 
{
  id: "sistema-turnos",
  titulo: "Sistema de Turnos Online",
  descripcion: "Plataforma web moderna y responsive para gestionar turnos de manera eficiente, permitiendo reservas, cancelaciones y notificaciones automáticas.",
  detalles: [
    "📅 Reserva y administración de turnos fácil y rápida",
    "🔔 Notificaciones y recordatorios automáticos vía email o WhatsApp",
    "👥 Gestión de clientes y perfiles desde un panel administrativo",
    "📊 Reportes y estadísticas de uso para optimizar la atención",
    "🌐 Compatible con dispositivos móviles y desktop para una experiencia completa",
  ],
  imagenes: [img1, img2, img3],
  link: "https://tusitio.com/sistema-turnos",
}
];
