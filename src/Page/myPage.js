import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const MyPage = () => {
  //Manejar el tema de nuestra app sin el uso de Context
  const [theme, setTheme] = useState("light");

  const HandleRadio = (e) => {
    // console.log(e.target.value);
    setTheme(e.target.value);
  };

  return (
    <div className="my-page">
      <Header handleRadio={HandleRadio} theme={theme} />
      <Main theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default MyPage;
