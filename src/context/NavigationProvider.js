import { createContext, useState, useContext, useRef } from "react";

const NavigationContext = createContext();

export function useNavigation() {
  return useContext(NavigationContext);
}

export default function NavigationProvider({ children }) {
  const heroSection = useRef();
  const myInfoSection = useRef();
  const projectSection = useRef();
  const contactSection = useRef();

  const selectedSectionToScrollTo = (idx) => {
    if (idx === 0) {
      return heroSection;
    } else if (idx === 1) {
      return myInfoSection;
    } else if (idx === 2) {
      return projectSection;
    } else {
      return contactSection;
    }
  };

  const data = {
    heroSection,
    myInfoSection,
    projectSection,
    contactSection,
    selectedSectionToScrollTo,
    // selectedSectionToScrollTo,
  };
  return (
    <NavigationContext.Provider value={data}>
      {children}
    </NavigationContext.Provider>
  );
}
