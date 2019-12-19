import React from "react";



import {
  Container,
} from "reactstrap";

// core components

function AboutView() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <div className="main">
        <div className="section section-dark text-center" style={{paddingBottom:200}}>
          <Container>
            <h2 className="title">About us</h2>
            <img alt="..."
                        className=" imgalign"
                        src={require("assets/img/carbon-or.jpg")}
                      />
                    <div>
                     <p  className = "text-para"> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  
                    </p>
                    </div>
          </Container>

        </div>
        
      </div>
    </>
  );
}

export default AboutView;
