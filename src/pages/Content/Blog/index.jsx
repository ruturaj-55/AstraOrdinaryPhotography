import React, { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./style.scss";
import CircularProgress from "@mui/material/CircularProgress";
import { db } from "../../../firebase";
import { getDoc, doc } from "firebase/firestore";
import Typography from "@mui/material/Typography";

const BlogPage = () => {
  const params = useParams();
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const docRef = doc(db, "Blogs", params.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setBlog(docSnap.data());
          setLoading(false);
        } else {
          alert("Error Fetching Document");
        }
      } catch (error) {
        alert(error);
      }
    };
    getBlogData();
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

  var datePosted;
  var blogData;
  if (!loading) {
    datePosted = getDate(blog.PostedOn);
    blogData = blog["BlogData"];
  }

  return (
    <HelmetProvider>
      <Container className="About-header mt-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Blog | Astraordinary </title>
        </Helmet>
        {loading ? (
          <CircularProgress color="success" />
        ) : (
          <div style={{ width: "75%" }} className="m-5">
            <div className="d-flex mt-5 mb-2">
              <Typography variant="h2">{blog["Title"]}</Typography>
            </div>
            <div className="d-flex mt-2 mb-5">
              <Typography variant="h7">{datePosted}</Typography>
            </div>

            <div style={{ width: "100%" }}>
              <img
                className="d-block w-100"
                src={blog["CoverImage"]}
                alt={blog["Title"]}
              />
            </div>

            <div className="d-flex blog-description mt-5 mb-4">
              <Typography variant="body1" gutterBottom>
                {blog["BlogDesc"]}
              </Typography>
            </div>

            <div>
              {blogData.map((data, ind) => {
                if (data["type"] === "description") {
                  return (
                    <div
                      className="d-flex blog-description mt-4 mb-4"
                      key={ind}
                    >
                      <Typography variant="body1" gutterBottom>
                        {data["data"]}
                      </Typography>
                    </div>
                  );
                } else if (data["type"] === "image") {
                  return (
                    <div
                      className="d-flex justify-content-center"
                      style={{ width: "100%" }}
                      key={ind}
                    >
                      <img
                        className="d-block w-100"
                        src={data["data"]}
                        alt={blog["Title"]}
                      />
                    </div>
                  );
                } else if (data["type"] === "title") {
                  return (
                    <div
                      className="d-flex blog-description mt-4 mb-4"
                      key={ind}
                    >
                      <Typography variant="h5" gutterBottom>
                        {data["data"]}
                      </Typography>
                    </div>
                  );
                } else {
                  return <div></div>;
                }
              })}
            </div>
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};

export default BlogPage;
