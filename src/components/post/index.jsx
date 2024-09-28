import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const PostComponent = (props) => {
  const navigate = useNavigate();
  const data = props.data;
  return (
    <div className="po_item">
      <img src={data.CoverImage} alt="" />
      <div className="content">
        <p>{data.About}</p>
        <Button
          variant="outlined"
          onClick={() => navigate(`/posts/${props.id}`)}
        >
          View Post
        </Button>
      </div>
    </div>
  );
};

export default PostComponent;
