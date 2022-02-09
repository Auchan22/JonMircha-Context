const Main = ({ theme }) => {
  return (
    <main className={theme}>
      <p>Bienvenido Invitado</p>
      <p>Hola Usuario</p>
      <p>Lorem ipsum etc contenido principal</p>
      {theme === "light" ? <h3>Tema {theme}</h3> : <h3>Tema {theme}</h3>}
    </main>
  );
};

export default Main;
