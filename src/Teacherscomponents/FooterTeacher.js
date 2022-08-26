import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap/lib/Tab";

import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../Teacherassets/Teacherimg/nav-icon1.svg";
import navIcon2 from "../Teacherassets/Teacherimg/nav-icon2.svg";
import navIcon3 from "../Teacherassets/Teacherimg/nav-icon3.svg";

export const Footerteacher = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <h2 style={{color:"black"}}>Connect</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
