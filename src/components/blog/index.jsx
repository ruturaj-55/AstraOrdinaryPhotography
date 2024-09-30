import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

const BlogComponenent = (props) => {
  const data = props.data;
  const navigate = useNavigate();

  const getDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const monthName = date.toLocaleString("default", {
      month: "long",
    });
    const day = date.getDate();
    return day + " " + monthName + " " + year;
  };

  return (
    <div
      className="blog-items m-5 p-5"
      style={{ width: "75%" }}
      onClick={() => navigate(`/blogs/${props.id}`)}
    >
      <div className="cropped-image" style={{ width: "100%", height: 200 }}>
        <img className="mb-5" src={data["CoverImage"]} alt={data["Title"]} />
      </div>

      <div className="d-flex mt-4">
        <Typography variant="h6" gutterBottom>
          <Link href="#">{data["Title"]}</Link>
        </Typography>
      </div>

      <div className="d-flex">
        <Typography variant="body1" gutterBottom>
          {getDate(data["PostedOn"])}
        </Typography>
      </div>

      <div className="d-flex post-description">
        <Typography variant="body2" gutterBottom>
          {data["BlogDesc"]}
        </Typography>
      </div>
    </div>
  );
};

export default BlogComponenent;
