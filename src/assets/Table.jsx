import "./table.css";
export const Table = () => {
  const styleLogoImg = { width: "55px", height: "auto" };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // backgroundImage:
        // "radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255, 1) 100%), url(/background.jpg)",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255, 0) 100%), url(/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",

        width: "80%",
        maxWidth: "700px",
        minWidth: "180px",
        margin: "auto",
        borderRadius: "20px",
        fontSize: "20px",
        color: "white",
        gap: "20px",
        padding: "20px",
        clipPath: "none",
        flexWrap: "wrap",
        // position: "relative",
        // marginTop: "-20px",
        // boxShadow: "0 0 20px #2e91a1",
      }}
    >
      <span className="logo">
        <img src="/logos/react.webp" style={styleLogoImg} />
        <span>React</span>
      </span>
      <span className="logo">
        <img src="/logos/node.png" style={styleLogoImg} />
        <span>Node JS</span>
      </span>
      <span className="logo">
        <img src="/logos/java.png" style={styleLogoImg} />
        <span>Java</span>
      </span>
      <span className="logo">
        <img src="/logos/nextJs.png" style={styleLogoImg} />
        <span>Next JS</span>
      </span>

      <span className="logo">
        <img src="/logos/html.png" style={styleLogoImg} />
        <span>HTML</span>
      </span>
      <span className="logo">
        <img src="/logos/css.png" style={styleLogoImg} />
        <span>CSS</span>
      </span>
      <span className="logo">
        <img src="/logos/javaScript.webp" style={styleLogoImg} />
        <span>Java Script</span>
      </span>
      <span className="logo">
        <img src="/logos/sass.png" style={styleLogoImg} />
        <span>Sass</span>
      </span>
    </div>
  );
};
