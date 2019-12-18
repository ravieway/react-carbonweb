
import React from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function ProductView() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <>
    <div className="section section text-center">
        <Container>
        <h2 className="title">Product Range</h2>
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        Product 1
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        Product 2
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        Product 3
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <TabContent activeTab={activeTab} className="text-center">
                <TabPane tabId="1">
                  <p>
                    Larger, yet dramatically thinner. More powerful, but
                    remarkably power efficient. With a smooth metal surface that
                    seamlessly meets the new Retina HD display.
                  </p>
                </TabPane>
                <TabPane tabId="2">
                  <p>Here is your profile.</p>
                </TabPane>
                <TabPane tabId="3">
                  <p>Here are your messages.</p>
                </TabPane>
              </TabContent>
        </Container>
      </div>{" "}
    </>
  );
}

export default ProductView;
