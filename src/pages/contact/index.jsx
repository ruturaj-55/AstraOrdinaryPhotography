import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";
import ContactCard from "../../components/contact";

const ContactPage = () => {
  return (
    <HelmetProvider>
      <Container className="About-header mt-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Contact | Astraordinary </title>
        </Helmet>
        <Row className="mb-5">
          <Col lg="12">
            <h2 className="display-4 mb-4  mt-5"> Let's Connect </h2>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
      </Container>

      <ContactCard />
    </HelmetProvider>
  );
};

export default ContactPage;
