import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/carbon-ore.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Active Carbon</h1>
              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("assets/img/fog.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
              Test ReactJS Application
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
