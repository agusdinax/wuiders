import { Navbar } from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros";
import Servicios from "./components/Servicios/Servicios";
import Proyectos from "./components/Proyectos/Proyectos";
import ContactoForm from "./components/Contacto/ContactoForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div id="servicios">
        <Servicios />
      </div>
      <div id="proyectos">
        <Proyectos />
      </div>
       <div id="sobre-nosotros">
        <SobreNosotros />
      </div>
      <div id="contacto">
        <ContactoForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
