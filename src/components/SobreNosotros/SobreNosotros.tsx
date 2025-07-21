import "./SobreNosotros.css";
import ivanImg from "../../assets/ivan.png"; 
import agustinaImg from "../../assets/agus.png"; 
import {Typography,} from "@mui/material";
const SobreNosotros = () => {
  return (
    <section className="sobre-nosotros">
        <Typography variant="h2" component="h2" className="titulo-principal">
          Sobre <span>Nosotros</span>
        </Typography>
        <Typography variant="h6" className="subtitulo-servicios">
          <strong>Wuiders</strong> es una empresa dinámica especializada en servicios digitales: desarrollo web, hosting, diseño gráfico, marketing online y producción audiovisual. 
          Nacimos como un emprendimiento innovador y crecimos para ofrecer soluciones modernas y personalizadas que se adaptan a cada cliente.
        </Typography>

      <div className="personas">
        <div className="persona">
          <img src={ivanImg} alt="Iván Damboriana" className="foto-redonda" />
          <h4>Iván Damboriana</h4>
        </div>
        <div className="persona">
          <img src={agustinaImg} alt="Agustina Di Natale" className="foto-redonda" />
          <h4>Agustina Di Natale</h4>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
