import React, { useState, useEffect, useRef } from "react";
import { listCategorySelector } from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import HeaderAndBarAdmin from "../../components/headerAndBarAdmin/HeaderAndBarAdmin";
import { addNewCategory, editCategory, deleteCategory } from "../../redux/actions";

export const ManageCategory = () => {
  const [isedit, setIsedit] = useState(false);
  const [idedit, setIdedit] = useState();
  const [isOpen, setIsOpen] = useState(false);
  let modalRef = useRef()
  useEffect(() => {
    let handler = (event) => {
      if (!modalRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })
  const listCate = useSelector(listCategorySelector);
  
  const [categoryName, setCategoryName] = useState("");
  const handleCategoryNameChange = (e) => {
    console.log(e.target.value);
    setCategoryName(e.target.value);
  };
  const dispatch = useDispatch();
  const handleAddCategory = () => {
    dispatch(
      addNewCategory({
        id: listCate.length + 1,
        name: categoryName
      })
    )
    setCategoryName("")
  }
  const handleEdit = (id) => {
    setIsedit(true)
    setIdedit(id)
    console.log(id)
    setIsOpen(true)
    setCategoryName(listCate[id-1].name)
  }

  const handleCancel = () => {
    setIsedit(false)
    setIsOpen(false)
    setCategoryName("")
  }

  const handleSave = () => {
    dispatch(
      editCategory({
        stt : idedit -1,
        replaceCate : {
          id : idedit,
          name: categoryName
        }
      })
    )
    setIsOpen(false)
    setIsedit(false)
    setCategoryName("")
  }

  const handleDelete = (id) => {
    dispatch(deleteCategory(id))
  }

  return (
    <div>
      <>
        <HeaderAndBarAdmin active="Category" />
        <section id="content">
          <nav>
            <i class="bx fa-solid fa-bars"></i>
            <a href="#" class="nav-link">
              Category
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
                      Category
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button className="add-new" onClick={() => setIsOpen((isOpen) => !isOpen)}>
              Add new
            </button>
            <div className="table-users">
              <div className="header">List Category</div>

              <table cellSpacing="0" className="table-main">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Handle</th>
                  </tr>
                </thead>

                <tbody>
                  {listCate.map((cate, index) => (
                    <tr>
                      <td>{cate.id}</td>
                      <td>{cate.name}</td>
                      {/* <td>{(student.framework.includes(1,2,3)) ? 'ReacJS, VueJS, Angular' : 
                     (student.framework.includes(2)) ? 'VueJS' :
                     (student.framework.includes(3)) ? 'Angular' : 'No'}</td> */}
                      <td>
                        <div className="fill-button">
                          <button className="btn-handle" onClick={() => handleEdit(Number(cate.id))}>Edit</button>
                          <button className="btn-handle btn-delete" onClick={() => handleDelete(index)}>
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
                    <h2>Manage Category</h2>
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
                                value={categoryName}
                                onChange={handleCategoryNameChange}
                                placeholder="Enter name category"
                              />
                            </div>
                          </div>
                          
                        </div>

                
                      </form>
                      <div>
                        {isedit ? (
                          <div>
                            <button 
                              key={"save"} 
                              className="button btn-save"
                              onClick={ handleSave}
                            >
                              Lưu
                            </button>
                            <button
                              key={"cancel"}
                              className="button btn-cancel"
                              onClick={ handleCancel}
                            >
                              Hủy
                            </button>
                          </div>
                        ) : (
                          <button key={"add"} className="button" onClick={handleAddCategory}>
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
