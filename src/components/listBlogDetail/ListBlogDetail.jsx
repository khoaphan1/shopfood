import React from "react";
import "./ListBlogDetail.css";
import BlogItem from "../blogItem/BlogItem";
import NavigationBlog from "../navigationBlog/NavigationBlog";
import ListCommentOfUser from "../listCommentOfUser/ListCommentOfUser";
import { useState } from "react";
import { useParams } from "react-router";
import { listBlogSelector, listCommentSelector } from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addNewComment } from "../../redux/actions";

const ListBlogDetail = () => {
  const stars = 3;
  const blogid = useParams();
  const listCmt = useSelector(listCommentSelector);
  const dispatch = useDispatch();
  const listBlog = useSelector(listBlogSelector);
  const blogDetail = listBlog.filter((x) => x.id === Number(blogid.id));
  const blog = blogDetail[0];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  //////////////////////////////
  var today = new Date();
  var date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAddComment = () => {
    dispatch(
      addNewComment({
        id: listCmt.length + 1,
        content: content,
        star: rating,
        commentDay: date,
        author: name,
        itemId: Number(blogid.id),
        category: "blog",
      })
    );
    setName("");
    setContent("");
  };

  let listCmtbyId = [];
  for (let i = 0; i < listCmt.length; i++) {
    if (
      listCmt[i].itemId === Number(blogid.id) &&
      listCmt[i].category === "blog"
    ) {
      listCmtbyId.push(listCmt[i]);
    }
  }
  console.log("listCmtBlogbyId :", listCmtbyId);
  console.log("listCmtBlog :", listCmt);

  return (
    <div className="blog-area py-20 mb-20">
      <div className="max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full">
        <div className="flex w-full">
          <div className="w-2/3">
            <div className="blog-list">
              <h3 class="single-post-title">
                <a href="blog-details.html">{blog.name}</a>
              </h3>
              <div class="single-post-meta">
                <span> Posts by : {blog.author}</span>
                <span>{blog.dateCreate}</span>
              </div>
              <div class="single-post-img">
                <img src={blog.image} alt="" />
              </div>
              <div className="blog-title-text">
                <span>{blog.content}</span>
              </div>
              <h4 class="single-post-share">Share this post</h4>
              <div class="post-social-link">
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-google"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-discord"></i>
                </a>
              </div>
              <div className="comment-area">
                <h4 className="commnet-area-title">
                  There are {listCmtbyId.length} comments
                </h4>
                <div className="comment-area-container">
                  {listCmtbyId.map((cmt, index) => (
                    <div className="comment-area-item flex" key={index}>
                      <div className="comment-area-image">
                        <img
                          src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/icon/logo.jpg"
                          alt=""
                        />
                      </div>
                      <div className="comment-area-content">
                        <div className="comment-area-info">
                          <a href="#">{cmt.author}</a>
                          <div className="star-rating-user">
                            {[...Array(5)].map((star, index) => {
                              index += 1;
                              return (
                                <p
                                  key={index}
                                  className={
                                    index <= cmt.star
                                      ? "on rating-btn"
                                      : "off rating-btn"
                                  }
                                >
                                  <p className="star">&#9733;</p>
                                </p>
                              );
                            })}
                          </div>
                          <span>{cmt.commentDay}</span>
                          <p>{cmt.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rating-area">
                <h4 className="rating-area-title">Add your rating here !</h4>
                <div className="star-rating">
                  <p>Vote stars</p>
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                      >
                        <span className="star">&#9733;</span>
                      </button>
                    );
                  })}
                </div>
                <label for="r-textarea">Your Review</label>
                <textarea
                  name="review"
                  id="r-textarea"
                  cols="30"
                  rows="10"
                  className="text-rating"
                  value={content}
                  onChange={handleContent}
                ></textarea>
                <label for="r-name">Name *</label>
                <input
                  type="text"
                  placeholder=""
                  id="r-name"
                  value={name}
                  onChange={handleName}
                />
                <div className="submit-btn-info">
                  <button
                    type="button"
                    class="default-btn"
                    onClick={handleAddComment}
                  >
                    Submit
                  </button>
                </div>
                <div className="submit-btn-info">
                  <NavLink to="/admin/Comment" class="default-btn">
                    <i className="bx fa-solid fa-comment"></i>
                    <span class="text"> Go to Comment Page</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 ml-7">
            <NavigationBlog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBlogDetail;
