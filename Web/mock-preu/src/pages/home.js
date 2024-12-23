import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h2>Bienvenido al Preuniversitario</h2>
      <p>El puntaje nacional, a tu alcance.</p>
      <p>Las notas que siempre quisiste a solo un click.</p>
      
       

      <div>
        <p>
            Encuentra el plan que mas se adapte a tus necesidades:
        </p>
      </div>
      {/* Botón CTA para ver los cursos */}
      <button onClick={() => alert('ss')}>Ver precios</button>

      {/* Footer */}
      <footer className="footer">
        <div>
          <p>&copy; 2024 Preuniversitario. Todos los derechos reservados.</p>
        </div>
        <div>
          <p>Contáctanos: info@preuniversitario.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
