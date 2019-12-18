
import React from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
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

                <img alt="..."
                        className=" imgalign"
                        src={require("assets/img/login-image.jpg")}
                      />
                    <div>
                     <h4>Product Title 1</h4>
                     <p  className = "text-para"> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  
                    </p>
                    </div>
                </TabPane>

              
                <TabPane tabId="2">

                    <img alt="..."
                        className=" imgalign"
                        src={require("assets/img/login-image.jpg")}
                      />
                    <div>
                     <h4>Product Title 2</h4>
                     <p  className = "text-para"> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  
                    </p>
                    </div>
                </TabPane>
                <TabPane tabId="3">
                <img alt="..."
                        className=" imgalign"
                        src={require("assets/img/login-image.jpg")}
                      />
                    <div>
                     <h4>Product Title 3</h4>
                     <p  className = "text-para"> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  
                    </p>
                    </div>
                </TabPane>
              </TabContent>
        </Container>

        <br></br><br></br><br></br><br></br><br></br>
      </div>
    </>
  );
}

export default ProductView;
