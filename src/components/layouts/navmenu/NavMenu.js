import { useState } from "react";
import { useNavigation } from "../../../context/NavigationProvider";
import "./navMenu.scss";

const NavMenu = () => {
  const { selectedSectionToScrollTo } = useNavigation();
  const navItems = [
    <i className="bx bx-home-alt-2"></i>,
    <i className="bx bx-user"></i>,
    <i style={{ fontWeight: "bold" }} className="bx bxl-react"></i>,
    <i className="bx bx-phone"></i>,
  ];

  const handleNav = (idx) => {
    let sect = selectedSectionToScrollTo(idx);
    sect.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ul className="nav d-flex flex-column justify-content-between align-items-center">
      {navItems.map((item, idx) => (
        <li onClick={() => handleNav(idx)} key={idx}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
