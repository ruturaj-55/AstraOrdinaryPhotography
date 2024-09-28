import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Button from "@mui/material/Button";
import portfolio from "../../assets/images/profile2.jpg";
import "./style.scss";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home | Astraordinary</title>
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${portfolio})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">"I’m Ruturaj Patil"</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        "Astronomy",
                        "Web Developer",
                        "Android Developer",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  at nisl euismod urna bibendum
                </p>
                <div className="intro_btn-action pb-5">
                  <Button variant="outlined" onClick={() => navigate("/posts")}>
                    Posts
                  </Button>
                  <Button variant="outlined" onClick={() => navigate("/blogs")}>
                    Blogs
                  </Button>
                  <Button variant="outlined" onClick={null}>
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};

export default HomePage;
