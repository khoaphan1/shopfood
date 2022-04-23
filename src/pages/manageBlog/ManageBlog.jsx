import React, { useState, useEffect, useRef } from "react";
import { listBlogSelector } from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import HeaderAndBarAdmin from "../../components/headerAndBarAdmin/HeaderAndBarAdmin";
import { addNewBlog, editBlog, deleteBlog } from "../../redux/actions";

export const ManageBlog = () => {
  const listBlog = useSelector(listBlogSelector);
  const [isedit, setIsedit] = useState(false);
  const [idedit, setIdedit] = useState();
  const [isOpen, setIsOpen] = useState(false);
  let modalRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const [theme, setTheme] = useState();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [view, setView] = useState();
  const [totalCmt, setTotalCmt] = useState();
  var today = new Date();
  var date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();

  ////////////////////////////////////////////
  const handleSetName = (e) => {
    setName(e.target.value);
  };
  const handleSetAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const handleSetTag = (e) => {
    setTag(e.target.value);
  };
  const handleSetDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleSetTotalCmt = (e) => {
    setTotalCmt(e.target.value);
  };
  const handleSetView = (e) => {
    setView(e.target.value);
  };

  const handleSetContent = (e) => {
    setContent(e.target.value);
  };
  useEffect(() => {
    return () => {
      theme && URL.revokeObjectURL(theme.preview);
    };
  }, [theme]);
  const handleTheme = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setTheme(file.preview);
  };
  ////////////////////////////////////
  const dispatch = useDispatch();
  const handleAddUser = () => {
    dispatch(
      addNewBlog({
        id: listBlog.length + 1,
        image: theme,
        name,
        author,
        content,
        tag,
        des: description,
        view,
        totalComment: totalCmt,
        dateCreate: date
      })
    );
    setName("");
    setAuthor("");
    setContent("");
    setTag("");
    setDescription("");
    setView("");
    setTotalCmt("");
    setTheme();
  };
  const handleEdit = (id) => {
    setIsedit(true);
    setIdedit(id);
    console.log(id);
    setIsOpen(true);
    setName(listBlog[id - 1].name);
    setAuthor(listBlog[id - 1].author);
    setContent(listBlog[id - 1].content);
    setTag(listBlog[id - 1].tag);
    setDescription(listBlog[id - 1].des);
    setView(listBlog[id - 1].view);
    setTotalCmt(listBlog[id - 1].totalComment);
    setTheme(listBlog[id - 1].image);
  };

  const handleCancel = () => {
    setIsedit(false);
    setIsOpen(false);
    setName("");
    setAuthor("");
    setContent("");
    setTag("");
    setDescription("");
    setView("");
    setTotalCmt("");
    setTheme();
  };

  const handleSave = () => {
    dispatch(
      editBlog({
        stt: idedit - 1,
        replaceBlog: {
          id: idedit,
          image: theme,
          name,
          author,
          content,
          tag,
          des: description,
          view,
          totalComment: totalCmt,
          dateCreate: date
        },
      })
    );
    setIsOpen(false);
    setIsedit(false);
    setName("");
    setAuthor("");
    setContent("");
    setTag("");
    setDescription("");
    setView("");
    setTotalCmt("");
    setTheme();
  };

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };
  return (
    <div>
      <>
        <HeaderAndBarAdmin active="Blog" />
        <section id="content">
          <nav>
            <i class="bx fa-solid fa-bars"></i>
            <a href="#" class="nav-link">
              Blog
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
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button className="add-new" onClick={() => setIsOpen((isOpen) => !isOpen)}>
              Add new
            </button>
            <div className="table-users">
              <div className="header">List Blog</div>

              <table cellSpacing="0" className="table-main">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Theme</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Content</th>
                    <th>Tag</th>
                    <th>Des</th>
                    <th>View</th>
                    <th>Total Comment</th>
                    <th>dateCreate</th>
                    <th>Handle</th>
                  </tr>
                </thead>

                <tbody>
                  {listBlog.map((blog, index) => (
                    <tr>
                      <td>{blog.id}</td>
                      <td>
                        <img key={index} src={blog.image} alt="" width="80%" />
                      </td>
                      <td>{blog.name}</td>
                      <td>{blog.author}</td>
                      <td>
                        <p>{blog.content}</p>
                      </td>
                      <td>{blog.tag}</td>
                      <td>
                        <p>{blog.des}</p>
                      </td>
                      <td>{blog.view}</td>
                      <td>{blog.totalComment}</td>
                      <td>{blog.dateCreate}</td>
                      {/* <td>{(student.framework.includes(1,2,3)) ? 'ReacJS, VueJS, Angular' : 
                     (student.framework.includes(2)) ? 'VueJS' :
                     (student.framework.includes(3)) ? 'Angular' : 'No'}</td> */}
                      <td>
                        <div className="fill-button">
                          <button
                            onClick={() => handleEdit(Number(blog.id))}
                            className="btn-handle"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(index)}
                            className="btn-handle btn-delete"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </section>
        {isOpen && (
          <div className="modal">
            <div className="modal-container" ref={modalRef}>
              <div className="form_wrapper">
                <div className="form_container">
                  <div className="title_container">
                    <h2>Manage Blog</h2>
                  </div>

                  <div className="row clearfix">
                    <div>
                      <form>
                        <div className="row clearfix">
                          <div className="col_half">
                            <div className="input_field">
                              <span>
                                <i
                                  aria-hidden="true"
                                  className="fa fa-user"
                                ></i>
                              </span>
                              <input
                                type="text"
                                placeholder="Enter Name Blog"
                                value={name}
                                onChange={handleSetName}
                              />
                            </div>
                          </div>
                          <div className="col_half">
                            <div className="input_field">
                              <span>
                                <i
                                  aria-hidden="true"
                                  className="fa fa-user"
                                ></i>
                              </span>
                              <input
                                type="text"
                                placeholder="Enter Author"
                                value={author}
                                onChange={handleSetAuthor}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row clearfix">
                          <div className="col_half">
                            <div className="input_field">
                              <span>
                                <i
                                  aria-hidden="true"
                                  className="fa fa-user"
                                ></i>
                              </span>
                              <input
                                type="text"
                                placeholder="Enter Tag"
                                value={tag}
                                onChange={handleSetTag}
                              />
                            </div>
                          </div>
                          <div className="col_half">
                            <div className="input_field">
                              <span>
                                <i
                                  aria-hidden="true"
                                  className="fa fa-user"
                                ></i>
                              </span>
                              <input
                                type="text"
                                placeholder="Enter Description"
                                value={description}
                                onChange={handleSetDescription}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row clearfix">
                          <div className="col_half">
                            <div className="input_field">
                              <span>
                                <i
                                  aria-hidden="true"
                                  className="fa fa-user"
                                ></i>
                              </span>
                              <input
                                type="text"
                                placeholder="Enter Number of Comment"
                                value={totalCmt}
                                onChange={handleSetTotalCmt}
                              />
                            </div>
                          </div>
                          <div className="col_half">
                            <div className="input_field">
                              <span>
                                <i
                                  aria-hidden="true"
                                  className="fa fa-user"
                                ></i>
                              </span>
                              <input
                                type="text"
                                placeholder="Enter view"
                                value={view}
                                onChange={handleSetView}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="input_field">
                          <span>
                            <i
                              aria-hidden="true"
                              className="fa fa-envelope"
                            ></i>
                          </span>
                          <input
                            type="text"
                            placeholder="Enter Content"
                            value={content}
                            onChange={handleSetContent}
                          />
                        </div>

                        <div className="input_field">
                          <input type="file" onChange={handleTheme} />
                        </div>
                      </form>
                      <div>
                        {isedit ? (
                          <div>
                            <button
                              key={"save"}
                              onClick={handleSave}
                              className="button btn-save"
                            >
                              Lưu
                            </button>
                            <button
                              key={"cancel"}
                              onClick={handleCancel}
                              className="button btn-cancel"
                            >
                              Hủy
                            </button>
                          </div>
                        ) : (
                          <button
                            key={"add"}
                            className="button"
                            onClick={() => handleAddUser()}
                          >
                            Thêm mới
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
};
