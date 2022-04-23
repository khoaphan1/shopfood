import React from "react";
import "./ListCommentOfUser.css";

const ListCommentOfUser = () => {
  
  const stars = 3;
  return (
    <div>
      <div className="comment-area">
        <h4 className="commnet-area-title">There are 3 comments</h4>
        <div className="comment-area-container">
          <div className="comment-area-item flex">
            <div className="comment-area-image">
              <img
                src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/icon/logo.jpg"
                alt=""
              />
            </div>
            <div className="comment-area-content">
              <div className="comment-area-info">
                <a href="#">admin</a>
                <div className="star-rating-user">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <p
                        key={index}
                        className={
                          index <= stars ? "on rating-btn" : "off rating-btn"
                        }
                      >
                        <p className="star">&#9733;</p>
                      </p>
                    );
                  })}
                </div>
                <span>October 6, 2018 at 1:38 am</span>
                <p>just a nice post</p>
              </div>
            </div>
          </div>

          <div className="comment-area-item flex">
            <div className="comment-area-image">
              <img
                src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/icon/logo.jpg"
                alt=""
              />
            </div>
            <div className="comment-area-content">
              <div className="comment-area-info">
                <a href="#">admin</a>
                <div className="star-rating-user">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <p
                        key={index}
                        className={
                          index <= stars ? "on rating-btn" : "off rating-btn"
                        }
                      >
                        <p className="star">&#9733;</p>
                      </p>
                    );
                  })}
                </div>
                <span>October 6, 2018 at 1:38 am</span>
                <p>just a nice post</p>
              </div>
            </div>
          </div>

          <div className="comment-area-item flex">
            <div className="comment-area-image">
              <img
                src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/icon/logo.jpg"
                alt=""
              />
            </div>
            <div className="comment-area-content">
              <div className="comment-area-info">
                <a href="#">admin</a>
                <div className="star-rating-user">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <p
                        key={index}
                        className={
                          index <= stars ? "on rating-btn" : "off rating-btn"
                        }
                      >
                        <p className="star">&#9733;</p>
                      </p>
                    );
                  })}
                </div>
                <span>October 6, 2018 at 1:38 am</span>
                <p>just a nice post</p>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
};

export default ListCommentOfUser;
