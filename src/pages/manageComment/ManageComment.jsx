import React from "react";
import { listCommentSelector } from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import HeaderAndBarAdmin from "../../components/headerAndBarAdmin/HeaderAndBarAdmin";
import { deleteComment } from "../../redux/actions";

const ManageComment = () => {
    const listComment = useSelector(listCommentSelector);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
      dispatch(deleteComment(id))
    }
  
    return (
    <div>
      <>
        <HeaderAndBarAdmin active='Comment'/>
        <section id="content">
          <nav>
            <i class="bx fa-solid fa-bars"></i>
            <a href="#" class="nav-link">
              Product
            </a>
            <form action="#">
              <div class="form-input">
                <input type="search" placeholder="Search..." />
                <button type="submit" class="search-btn">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
            <input type="checkbox" id="switch-mode" hidden />
            <label for="switch-mode" class="switch-mode"></label>
            <a href="#" class="notification">
              <i class="fa-solid fa-bell"></i>
              <span class="num">8</span>
            </a>
            <a href="#" class="profile">
              <img src="https://i.pinimg.com/736x/af/5c/9e/af5c9e4d3073b223d290cf14543e34c0.jpg" />
            </a>
          </nav>

          <main>
            <div class="head-title">
              <div class="left">
                <h1>Dashboard</h1>
                <ul class="breadcrumb">
                  <li>
                    <a href="#">Dashboard</a>
                  </li>
                  <li>
                    <i class="bx fa-solid fa-angle-right"></i>
                  </li>
                  <li>
                    <a class="active" href="#">
                      Comment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="table-users">
              <div className="header">List Product</div>

              <table cellSpacing="0" className="table-main">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Content</th>
                    <th>Star</th>
                    <th>Comment Day</th>
                    <th>Author</th>
                    <th>Item Id</th>
                    <th>Category</th>
                    
                    <th>Handle</th>
                  </tr>
                </thead>

                <tbody>
                  {listComment.map((cmt, index) => (
                    <tr>
                      <td>{cmt.id}</td>
                      
                      <td>{cmt.content}</td>
                      <td>{cmt.star}</td>
                      <td>{cmt.commentDay}</td>
                      <td>{cmt.author}</td>
                      <td>{cmt.itemId}</td>
                      <td>{cmt.category}</td>
                      
                      {/* <td>{(student.framework.includes(1,2,3)) ? 'ReacJS, VueJS, Angular' : 
                     (student.framework.includes(2)) ? 'VueJS' :
                     (student.framework.includes(3)) ? 'Angular' : 'No'}</td> */}
                      <td>
                        <div className="fill-button">
                          <button onClick={() =>handleDelete(index)} className="btn-handle btn-delete">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </section>
      </>
    </div>
  );
};

export default ManageComment;
