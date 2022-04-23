import React from "react";
import ListCommentOfUser from "../listCommentOfUser/ListCommentOfUser";
import "./ListProductDetail.css";
import { useState } from "react";
import { useParams } from "react-router";
import { addProductToCart, addNewComment } from "../../redux/actions";
import { listProductSelector, listCommentSelector } from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const ListProductDetail = () => {
  const listPro = useSelector(listProductSelector);
  const listCmt = useSelector(listCommentSelector);
  const stars = 3;
  const proid = useParams();
  const dispatch = useDispatch();

  console.log(listPro);
  console.log(proid);
  const product = listPro[Number(proid.id) - 1];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const randomId = Math.floor(Math.random() * listPro.length) + 1;
  console.log(randomId);
  const [input, setInput] = useState(1);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  let listCmtbyId = [];
  for (let i = 0; i < listCmt.length; i++) {
    if (
      listCmt[i].itemId === Number(proid.id) &&
      listCmt[i].category === "product"
    ) {
      listCmtbyId.push(listCmt[i]);
    }
  }
  console.log("listCmtbyId :", listCmtbyId);
  console.log("listCmt :", listCmt);

  const handleAddToCart = (id, input) => {
    dispatch(addProductToCart(id, input));
    setInput(1);
    console.log(date);
  };

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
        itemId: Number(proid.id),
        category: "product",
      })
    );
    setName("");
    setContent("");
  };

  return (
    <div className="list-product-detail">
      <div className="max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full">
        <div className="product-detail-area flex flex-wrap">
          <div className="w-5/12">
            <div className="product-img-main">
              <img
                // src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/product/2.jpg"
                src={product.img}
                alt=""
              />
            </div>
          </div>
          <div className="w-7/12">
            <div className="infomation-product">
              <div class="product-details-text">
                <h3>{product.name}</h3>
                <div class="p-rating-review">
                  <div className="star-rating-product">
                    {[...Array(5)].map((star, index) => {
                      index += 1;
                      return (
                        <h2
                          key={index}
                          className={
                            index <= stars ? "on rating-btn" : "off rating-btn"
                          }
                        >
                          <i class="fa-solid fa-star"></i>
                        </h2>
                      );
                    })}
                  </div>
                  <a href="#" class="scroll-down">
                    ({listCmtbyId.length} customer reviews)
                  </a>
                </div>
                <h4>
                  ${product.oldprice}.00<span>${product.price}.00</span>
                </h4>
                <p>{product.desc}</p>
                <h5>
                  <i class="fa fa-check check-icon"></i>
                  {product.quality} in stock
                </h5>
                <div className="product-item-button">
                  <input
                    className="quality-num"
                    type="number"
                    min="1"
                    max={"5"}
                    value={input}
                    onChange={onChangeHandler}
                    placeholder="0"
                  />

                  <button
                    type="button"
                    class="default-btn"
                    onClick={() => handleAddToCart(product.id, input)}
                  >
                    Add to cart
                  </button>
                  <button className="icon-button" type="button">
                    <i class="fa-solid fa-heart"></i>
                  </button>
                  <button className="icon-button" type="button">
                    <NavLink to={`/product/${randomId}`}>
                      <i class="fa-solid fa-repeat"></i>
                    </NavLink>
                  </button>
                </div>
                <div class="product-tag-cat">
                  <div class="single-tag-cat">
                    <span class="p-d-title">Categories:</span>
                    <a href="#">Fashion &amp; clothing</a>,<a href="#">Men</a>
                  </div>
                  <div class="single-tag-cat">
                    <span class="p-d-title">Season:</span>
                    <a href="#">{product.season}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comment-area">
          <h4 className="commnet-area-title">There are {listCmtbyId.length} comments</h4>
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
                              index <= cmt.star ? "on rating-btn" : "off rating-btn"
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
                  onClick={() => {
                    console.log(index);
                    setRating(index);
                  }}
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
  );
};

export default ListProductDetail;
