const Header = ({ handleRadio, theme }) => {
  return (
    <header className={theme}>
      <h2>App sin Context</h2>
      <h3>Mi Cabecera</h3>

      <select name="laguage">
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>

      <input
        onClick={handleRadio}
        type="radio"
        name="theme"
        id="light"
        value="light"
        defaultChecked
      />
      <label htmlFor="light">Claro</label>
      <input
        onClick={handleRadio}
        type="radio"
        name="theme"
        id="dark"
        value="dark"
      />
      <label htmlFor="dark">Oscuro</label>
      <br />
      <br />

      <button>Iniciar sesión</button>
    </header>
  );
};

export default Header;
