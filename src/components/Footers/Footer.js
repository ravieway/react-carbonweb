import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
             
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()} C Base Labs
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
