import { createContext, useState } from "react";

export const Globals = createContext(null);

export default function Context({ children }) {
  const [globals, setGlobals] = useState({});
  return (
    <Globals.Provider value={{ globals, setGlobals }}>
      {children}
    </Globals.Provider>
  );
}
