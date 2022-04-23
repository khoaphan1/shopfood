import React from "react";
import "./BlogItem.css";
import { NavLink } from "react-router-dom";

const BlogItem = ({
  id,
  name,
  imageBlog,
  author,
  content,
  des,
  tag,
  view,
  totalComment,
  dateCreate
}) => {
  return (
    <div className="blog-item text-center">
      <div className="blog-item-img">
        <NavLink to={`/blog/${id}`}>
          <img
            src={imageBlog}
            alt=""
          />
        </NavLink>
      </div>
      <div className="blog-text">
        <h4>
          <NavLink to={`/blog/${id}`}>
            {name}
          </NavLink>
        </h4>
        <div className="post-meta">
          <span className="author-name">
            post by: <span>{author}</span>
          </span>
          <span className="post-date"> - {dateCreate}</span>
        </div>
        <p>
          {des}
        </p>
        {/* <a href="blog-details.html" className="default-btn" tabindex="0">
          Read more
        </a> */}
        <NavLink className="default-btn" to={`/blog/${id}`}>
           Read more
        </NavLink>
      </div>
    </div>
  );
};

export default BlogItem;
