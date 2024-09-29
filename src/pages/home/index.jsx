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
                <h2 className="mb-2">Astraordinary Photography</h2>
                <h3 className="mb-2">by Ruturaj Patil</h3>
                <div className="mt-4 mb-4">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: false,
                      delay: 20,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          "Welcome to my world of astrophotography, where the beauty of the cosmos comes to life.Here, I capture the mesmerizing dance of stars, the vibrant hues of nebulae, and the intricate details of distant galaxies. Each photograph tells a story of the universe's wonders, inviting you to explore the night sky from the comfort of your home. Join me on this celestial journey and discover the magic that lies beyond our world."
                        )
                        .start();
                    }}
                  />
                </div>
                <div className="intro_btn-action pb-5">
                  <Button variant="outlined" onClick={() => navigate("/posts")}>
                    Posts
                  </Button>
                  <Button variant="outlined" onClick={() => navigate("/blogs")}>
                    Blogs
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => navigate("/contact")}
                  >
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
