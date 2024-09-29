import React from "react";
import { Card, CardContent, Button } from "@mui/material";
import { Form, Container } from "react-bootstrap";
import { useTheme } from "../../theme/useTheme";
import emailjs from "emailjs-com";

const ContactCard = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_99eb7ud",
        "template_7fhdc3c",
        e.target,
        "zplPA8DxwSxCzP97Y"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const { theme } = useTheme();
  const colors = theme.colors;

  return (
    <Card
      sx={{
        maxWidth: "50%",
        margin: "20px auto",
        padding: "20px",
        textAlign: "center",
        border: "2px solid teal", // Set border color and width
        borderRadius: "8px", // Optional: Rounded corners
        backgroundColor: colors["body"],
      }}
    >
      <CardContent>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-5 mt-5" controlId="about-blog">
              <div className="d-flex flex-column justify-content-start align-items-start">
                <Form.Label style={{ color: colors["text"] }}>Name</Form.Label>

                <Form.Control
                  type="string"
                  name="from_name"
                  placeholder="Enter Name"
                  style={{ border: "2px solid teal" }}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-5 mt-5" controlId="about-blog">
              <div className="d-flex flex-column justify-content-start align-items-start">
                <Form.Label style={{ color: colors["text"] }}>Email</Form.Label>

                <Form.Control
                  type="string"
                  name="from_email"
                  placeholder="Enter Email"
                  style={{ border: "2px solid teal" }}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-5" controlId="description">
              <div className="d-flex flex-column justify-content-start align-items-start">
                <Form.Label style={{ color: colors["text"] }}>
                  Description
                </Form.Label>
                <Form.Control
                  name="message"
                  as="textarea"
                  rows={5}
                  placeholder="Enter Message"
                  style={{ border: "2px solid teal" }}
                />
              </div>
            </Form.Group>

            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
