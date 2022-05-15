import { useState } from "react";
import avatar from "../../assets/ava.JPEG";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Firebase } from "../../assets/icons8-firebase.svg";
import { ReactComponent as Figma } from "../../assets/figma-1.svg";

import "./hero.scss";
import { useNavigation } from "../../context/NavigationProvider";

const Hero = () => {
  const { heroSection } = useNavigation();
  return (
    <section
      ref={heroSection}
      className="hero my-container d-flex justify-content-center"
    >
      <div className="hero__header d-flex flex-column align-items-center">
        <h3>Hi, I'm</h3>
        <h2>Lang Huynh Dang Khoa</h2>
        <p>
          A front-end developer, specialize in <b>ReactJS</b>
        </p>
        <span
          className="d-flex flex-column align-items-center"
          style={{ marginTop: "10px" }}
        >
          <p style={{ fontSize: "15px" }}>Hover your mouse to see in details</p>
          <span className="hero__header__bouncing-arrow d-flex flex-column justify-content-center">
            <i className="bx bx-mouse"></i>
            <i className="hero__header__bouncing-arrow__arrow bx bx-down-arrow-alt"></i>
          </span>
        </span>
        <div className="hero__header__skills d-flex justify-content-center align-items-center">
          <img
            className="hero__header__skills__avatar"
            src={avatar}
            alt="avatar"
          />
          <span className="hero__header__skills__hover-show d-flex justify-content-center align-items-center">
            <Logo className="hero__header__skills__hover-show__icon" />
            <i
              className="bx bxl-html5 hero__header__skills__hover-show__icon"
              style={{ fontSize: "110px", color: "#f25320" }}
            ></i>
            <i
              className="bx bxl-css3 hero__header__skills__hover-show__icon"
              style={{ fontSize: "110px", color: "#006ab1" }}
            ></i>
            <i
              className="bx bxl-sass hero__header__skills__hover-show__icon"
              style={{ fontSize: "100px", color: "#c26191" }}
            ></i>
            <i
              className="bx bxl-github hero__header__skills__hover-show__icon"
              style={{ fontSize: "100px" }}
            ></i>
            <Firebase className="hero__header__skills__hover-show__icon" />
            <Figma className="hero__header__skills__hover-show__icon" />
            <i
              class="bx bxl-bootstrap hero__header__skills__hover-show__icon"
              style={{ fontSize: "110px", color: "#7430f9" }}
            ></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
