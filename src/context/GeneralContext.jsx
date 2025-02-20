/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const data = { language, setLanguage };

  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
};
