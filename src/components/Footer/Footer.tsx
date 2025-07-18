import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        &copy; {year} Todos los derechos reservados | Balcarce, Buenos Aires, Argentina
      </p>
    </footer>
  );
};

export default Footer;
