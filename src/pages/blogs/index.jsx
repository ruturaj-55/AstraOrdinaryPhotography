import React, { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { db } from "../../firebase";
import BlogComponent from "../../components/blog/index";
import CircularProgress from "@mui/material/CircularProgress";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "BlogsMetaData"),
      orderBy("PostedOn", "desc")
    );
    onSnapshot(q, (querySnapshot) => {
      setBlogs(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      setLoading(false);
    });
  }, []);

  return (
    <HelmetProvider>
      <Container className="About-header mt-5">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Blogs | Astraordinary </title>
        </Helmet>
        <Row className="mb-5">
          <Col lg="12">
            <h2 className="display-4 mb-4  mt-5"> Blogs </h2>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {loading ? (
          <CircularProgress color="success" />
        ) : (
          <div>
            {blogs.length === 0 ? (
              <div>Nothing here</div>
            ) : (
              <div>
                {blogs &&
                  blogs.map((blog, ind) => {
                    return (
                      <BlogComponent key={ind} data={blog.data} id={blog.id} />
                    );
                  })}
              </div>
            )}
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};

export default BlogsPage;
