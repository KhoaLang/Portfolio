import { Col, Row } from "antd";
import { useState } from "react";
import airbnb from "../../assets/pj.png";
import { useNavigation } from "../../context/NavigationProvider";
import Card from "../layouts/card/Card";
import "./project.scss";

const Project = () => {
  const { projectSection } = useNavigation();
  const airBnbDescription = (
    <>
      <p>One page website cloning the langding page of AirBnb website</p>
      <p
        style={{
          textAlign: "center",
          fontWeight: "bold",
          margin: "10px 0 10px 0",
          fontSize: "18px",
        }}
      >
        Tech stack
      </p>
      <ul className="d-flex justify-content-between align-items-center">
        <li>ReactJS</li>
        <li>Sass</li>
        <li>Bootstrap</li>
        <li>Material UI</li>
      </ul>
    </>
  );
  return (
    <section
      ref={projectSection}
      className="project my-container d-flex flex-column align-items-center"
    >
      <h3>My project</h3>
      <div className="project__main">
        <Row style={{ marginTop: "30px" }}>
          <Col className="d-flex justify-content-center" span={24}>
            <Card
              image={airbnb}
              name="AirBNB clone"
              description={airBnbDescription}
              link="https://my-airbnb-clone-app.surge.sh"
            />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Project;
