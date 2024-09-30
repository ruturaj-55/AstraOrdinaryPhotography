import React, { useState, useEffect } from "react";
import "./style.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { db } from "../../../firebase";
import { getDoc, doc } from "firebase/firestore";

const PostPage = () => {
  const params = useParams();

  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPostData = async () => {
      try {
        const docRef = doc(db, "Posts", params.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPost(docSnap.data());
          setLoading(false);
        } else {
          alert("Error Fetching Document");
        }
      } catch (error) {
        alert(error);
      }
    };
    getPostData();
  }, [params.id]);

  const getDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const monthName = date.toLocaleString("default", {
      month: "long",
    });
    const day = date.getDate();
    return day + " " + monthName + " " + year;
  };

  const getTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
  };

  var images = [];
  var datePosted;
  var dateCaptured;
  var timeCaptured;

  if (!loading) {
    images = post.Images;
    datePosted = getDate(post.PostedOn);
    dateCaptured = getDate(post.CapturedOn);
    timeCaptured = getTime(post.CapturedOn);
  }
  return (
    <HelmetProvider>
      <Container className="About-header mt-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Post | Astraordinary </title>
        </Helmet>

        {loading ? (
          <CircularProgress color="success" />
        ) : (
          <div className="m-5" style={{ width: "80%" }}>
            <div className="d-flex mt-5 mb-2">
              <Typography variant="h4">{post["Title"]}</Typography>
            </div>
            <div className="d-flex mt-2 mb-5">
              <Typography variant="h7">{datePosted}</Typography>
            </div>

            <div>
              <Carousel>
                {images &&
                  images.map((data, ind) => (
                    <Carousel.Item key={ind}>
                      <img
                        className="d-block w-100"
                        src={data}
                        alt={post["Title"]}
                      />
                    </Carousel.Item>
                  ))}
              </Carousel>
            </div>
            <Container className="mt-5 mb-5">
              <div className="d-flex mt-5 mb-2">
                <strong>
                  <Typography variant="body1" fontWeight="bold">
                    Captured On :
                  </Typography>
                </strong>
              </div>
              <div className="d-flex mt-2 mb-4">
                <Typography variant="body2">
                  {dateCaptured}, {timeCaptured}
                </Typography>
              </div>

              <div className="d-flex post-description">
                <Typography variant="body1" gutterBottom>
                  {post["Description"]}
                </Typography>
              </div>
            </Container>
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};

export default PostPage;
