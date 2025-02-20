import "animate.css";
import "./App.css";
import { Bienvenidos, Welcome } from "./assets/welcome";
import { PresentationEnglishText, PresentationSpanishText } from "./Texts";
import "./App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Table } from "./assets/Table";
import AOS from "aos";
import "aos/dist/aos.css"; // Importar los estilos de AOS
import { useContext, useEffect } from "react";
import { LanguageSwitch } from "./assets/LanguageSwitch";
import { GeneralContext } from "./context/GeneralContext";
function App() {
  const { language } = useContext(GeneralContext);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <div className="mainContainer">
        <div className="container1">
          <div className="welcome">
            {language === "en" ? <Welcome /> : <Bienvenidos />}
          </div>
          <div
            className="text1 animate__animated animate__bounceIn"
            style={{
              animationDelay: "2.5s",
              animationDuration: "1s",
            }}
          >
            {language === "es" ? (
              <PresentationSpanishText />
            ) : (
              <PresentationEnglishText />
            )}
          </div>
          <div
            className="picture1 animate__animated animate__bounceIn"
            style={{
              animationDelay: "3s",
              animationDuration: "1s",
            }}
          >
            <img className="mainImage" src="/laptop.png" />
          </div>
          <div className="switch">
            <LanguageSwitch />
          </div>
        </div>
        <div className="container2">
          <svg
            className="svg-curve"
            viewBox="0 0 1440 79"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "relative", top: "-5px" }}
          >
            <path d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"></path>
          </svg>
          <p
            data-aos="flip-right"
            style={{
              textAlign: "center",
              color: "#0d021e",
              fontSize: "30px",
              fontWeight: "bold",
              margin: "20px",
            }}
          >
            Tooling:
          </p>
          <div data-aos="flip-left">
            <Table />
          </div>
          <p
            data-aos="flip-right"
            style={{
              textAlign: "center",
              color: "#0d021e",
              fontSize: "30px",
              fontWeight: "bold",
              margin: "20px",
            }}
          >
            My Work:
          </p>
          <img src="/avatar-removebg-preview.png" />
        </div>
        <svg
          viewBox="0 0 1440 79"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "100%",
            height: "auto",
            position: "relative",
            bottom: "-5px",
          }}
        >
          <path d="M-100 0C-100 0 218.416 55.835 693.5 55.835C1168.58 55.835 1487 0 1487 0V79H-100V0Z"></path>
        </svg>

        <div className="footer">
          <p>2025 Marcelo Feltes</p>
          <LinkedInIcon sx={{ fontSize: "30px" }} />
        </div>
      </div>
    </>
  );
}

export default App;
