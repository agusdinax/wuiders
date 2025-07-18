import "./SobreNosotros.css";
import ivanImg from "../../assets/ivan.png"; 
import agustinaImg from "../../assets/agus.png"; 

const SobreNosotros = () => {
  return (
    <section className="sobre-nosotros">
      <div className="intro">
        <h2>Quiénes Somos</h2>
        <p>
          <strong>SolucionesWeb</strong> es una empresa dinámica que brinda servicios y desarrollos en y para Internet. Ofrecemos servicios de Alojamiento Web, Desarrollo Web, Diseño Gráfico, Marketing Online y Producción Audiovisual. 
          Nacimos como un emprendimiento innovador y fuimos creciendo para ofrecer soluciones modernas que respondan a las necesidades de nuestros clientes.
        </p>
      </div>

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

      <div className="valores">
        <div className="bloque">
          <h3>Nuestra Misión</h3>
          <p>
            En SolucionesWeb, estamos dedicados a ofrecer soluciones digitales innovadoras que transforman la presencia online de nuestros clientes. Combinamos creatividad, tecnología avanzada y estrategias personalizadas para obtener resultados excepcionales.
          </p>
        </div>
        <div className="bloque">
          <h3>Nuestro Enfoque</h3>
          <p>
            Trabajamos de manera cercana con cada cliente para comprender sus objetivos. Buscamos crear soluciones únicas que reflejen la identidad y visión de cada negocio.
          </p>
        </div>
        <div className="bloque">
          <h3>¿Por Qué Elegirnos?</h3>
          <p>
            Nuestro enfoque se centra en la calidad, la innovación y la satisfacción del cliente. Nos comprometemos a superar expectativas, entregando sitios impactantes y estrategias digitales que generan resultados reales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
