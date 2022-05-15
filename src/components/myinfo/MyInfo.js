import { useState } from "react";
import { useNavigation } from "../../context/NavigationProvider";
import "./myInfo.scss";

const MyInfo = () => {
  const { myInfoSection, selectedSectionToScrollTo } = useNavigation();

  const handleNav = (idx) => {
    let sect = selectedSectionToScrollTo(idx);
    sect.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={myInfoSection}
      className="my-info my-container d-flex flex-column justify-content-center align-items-center"
    >
      <h3>About me</h3>
      <span className="my-info__paragraph">
        <p style={{ textAlign: "center" }}>
          I'm currently a third-years college student at National University of
          Ho Chi Minh City - University of Information Technology in Vietnam
          <br />
          Have 1 year experience working with extended library <b>ReactJS</b>, 5
          months in develop Android App with Java, 1 month in{" "}
          <strong>React Native</strong> development
          <br />
          Can <b>adapt</b> to new technology as well as programming language{" "}
          <br />
          See more in my{" "}
          <a style={{ color: "black" }} href="https://github.com/KhoaLang">
            <u>
              <strong>Github</strong>
            </u>
          </a>
        </p>
      </span>
      <button onClick={() => handleNav(3)} className="my-info__button">
        Get in touch
      </button>
    </section>
  );
};

export default MyInfo;
