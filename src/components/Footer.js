import { Container, Row, Col } from "react-bootstrap";
/* import { MailchimpForm } from "./MailchimpForm"; */
import logo from "../assets/img/logo.png";
/* import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg"; */
import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <div className={'name'}>
              <h1><img src={logo} alt="Logo" />&nbsp;{`ELMANDOUH`}</h1>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <SocialIcon url="https://twitter.com/KhaledElmandouh" />
              <SocialIcon url="https://www.linkedin.com/in/khaled-elsayed-elmandouh" />
              <SocialIcon url="https://github.com/Elmandouh1" />
              <SocialIcon url="mailto:elsayedk32@gmail.com" />
              {/* <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
