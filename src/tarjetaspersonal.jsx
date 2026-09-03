import "./tarjetaestilo.css";

function TarjetaPersonal() {
  return (
    <div className="tarjetapersonal">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmNNZ1pyYAzRJAIqBWyYSamjYRfJHEQc7aDnfsVUcgQQ&s"
        alt="Foto de perfil"
        className="fotoperfil"
      />

      <h2>Juan Pérez</h2>
      <p className="profesion">Desarrollador Web</p>

      <p className="descripcion">
        Hola, soy Juan. Me apasiona crear aplicaciones web modernas,
        intuitivas y fáciles de usar.
      </p>

      <div className="social-links">
        <a href="https://github.com">
          GitHub
        </a>

        <a href="https://linkedin.com">
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default TarjetaPersonal;
