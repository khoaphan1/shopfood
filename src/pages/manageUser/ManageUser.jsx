import React, { useState, useEffect, useRef } from "react";
import { listUserSelector } from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import HeaderAndBarAdmin from "../../components/headerAndBarAdmin/HeaderAndBarAdmin";
import "./ManageUser.css";
import { addNewUser, editUser, deleteUser } from "../../redux/actions";

const ManageUser = () => {
  const listUser = useSelector(listUserSelector);
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
  const [checked, setChecked] = useState("Male");
  const [role, setRole] = useState("user");
  const [status, setStatus] = useState("on");
  const [avata, setAvata] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  ////////////////////////////////////////////
  useEffect(()=> {
    return() => {
      avata && URL.revokeObjectURL(avata.preview)
    }
  }, [avata])
  const handleSetFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const handleSetLastName = (e) => {
    setLastName(e.target.value)
  }
  const handleSetUserName = (e) => {
    setUsername(e.target.value)
  }
  const handleSetPhone = (e) => {
    setPhone(e.target.value)
  }
  const handleSetEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleSetPassword = (e) => {
    setPassword(e.target.value)
  }
  const hanldeSetRole = (e) => {
    setRole(e.target.value)
  }
  const hanldeSetStatus = (e) => {
    setStatus(e.target.value)
  }
  const handleAvata = (e) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setAvata(file.preview)
  }
  ////////////////////////////////////
  const dispatch = useDispatch();
  const handleAddUser = () => {
    dispatch(
      addNewUser({
        id: listUser.length + 1,
        firstName,
        lastName,
        userName: username,
        phone,
        email,
        sex: checked,
        role,
        password,
        status,
        avata
      })
    )
    setFirstName("")
    setLastName("")
    setUsername("")
    setEmail("")
    setPassword("")
    setPhone("")
  }
  const handleEdit = (id) => {
    setIsedit(true)
    setIdedit(id)
    console.log(id)
    setIsOpen(true)
    setFirstName(listUser[id-1].firstName)
    setLastName(listUser[id-1].lastName)
    setUsername(listUser[id-1].userName)
    setPhone(listUser[id-1].phone)
    setEmail(listUser[id-1].email)
    setPassword(listUser[id-1].password)
    setRole(listUser[id-1].role)
    setStatus(listUser[id-1].status)
    setChecked(listUser[id-1].sex)
  }

  const handleCancel = () => {
    setIsedit(false)
    setIsOpen(false)
    setFirstName("")
    setLastName("")
    setUsername("")
    setEmail("")
    setPassword("")
    setPhone("")
  }

  const handleSave = () => {
    dispatch(
      editUser({
        stt : idedit -1,
        replaceUser : {
          id : idedit,
          firstName,
          lastName,
          userName: username,
          phone,
          email,
          sex: checked,
          role,
          password,
          status,
          avata
        }
      })
    )
    setIsOpen(false)
    setIsedit(false)
    setFirstName("")
    setLastName("")
    setUsername("")
    setEmail("")
    setPassword("")
    setPhone("")
  }

  const handleDelete = (id) => {
    dispatch(deleteUser(id))
  }

  return (
    <div>
      <>
        <HeaderAndBarAdmin active="User" />
        <section id="content">
          <nav>
            <i class="bx fa-solid fa-bars"></i>
            <a href="#" class="nav-link">
              User
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
                      User
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button className="add-new" onClick={() => setIsOpen((isOpen) => !isOpen)}>
              Add new
            </button>
            <div className="table-users">
              <div className="header">List User</div>

              <table cellSpacing="0" className="table-main">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Avatar</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th>Sex</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Password</th>
                    <th>Status</th>
                    <th>Handle</th>
                  </tr>
                </thead>

                <tbody>
                  {listUser.map((user, index) => (
                    <tr>
                      <td>{user.id}</td>
                      <td>
                        <img
                          key={index}
                          src={user.avata}
                          alt=""
                          width="80%"
                        />
                    </td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.userName}</td>
                      <td>{user.phone}</td>
                      <td>{user.sex}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>{user.password}</td>
                      <td>{user.status}</td>
                      {/* <td>{(student.framework.includes(1,2,3)) ? 'ReacJS, VueJS, Angular' : 
                     (student.framework.includes(2)) ? 'VueJS' :
                     (student.framework.includes(3)) ? 'Angular' : 'No'}</td> */}
                      <td>
                        <div className="fill-button">
                          <button onClick={() => handleEdit(Number(user.id))} className="btn-handle">Edit</button>
                          <button onClick={() => handleDelete(index)} className="btn-handle btn-delete">Delete</button>
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
                    <h2>Manage User</h2>
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
                                placeholder="Enter Fist Name"
                                value={firstName}
                                onChange={handleSetFirstName}
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
                                placeholder="Enter Last Name"
                                value={lastName}
                                onChange={handleSetLastName}
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
                                placeholder="Enter Username" 
                                value={username}
                                onChange={handleSetUserName} />
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
                                placeholder="Enter Phone" 
                                value={phone}
                                onChange={handleSetPhone}
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
                              <input type="text" placeholder="Enter Mail" value={email}
                                onChange={handleSetEmail}/>
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
                              <input type="text" placeholder="Enter Password" value={password}
                                onChange={handleSetPassword} />
                            </div>
                          </div>
                        </div>

                        

                        <div className="input-group-row">
                          <div className="input-item input-item-nav">
                            <p className="input-text-name">Role</p>
                          </div>
                          <div className="input-item input-item-nav">
                            <p className="input-text-name">Status</p>
                          </div>
                          <div className="input-item input-item-nav">
                            <p className="input-text-name">Sex</p>
                          </div>
                        </div>

                        <div className="input-group-row">
                          <div className="input-item input-item-nav">
                            <select className="select-group" value={role} onChange={hanldeSetRole}>
                              <option value="admin">Admin</option>
                              <option value="user">User</option>
                            </select>
                          </div>
                          <div className="input-item input-item-nav">
                            <select className="select-group" value={status} onChange={hanldeSetStatus}>
                              <option value="on">Still in use</option>
                              <option value="off">Expire</option>
                            </select>
                          </div>
                          <div className="input-item input-item-nav">
                            <div className="input-item-group">

                              <div className="input-item-group__item">
                                <input
                                  className="radio-item"
                                  type="radio"
                                  onChange={() => setChecked("Male")}
                                  checked={checked === "Male"} // so sánh checked với course.id trùng thì mới cho hiển thị
                                ></input>{" "}
                                <label>Male</label>
                              </div>
                              
                              <div className="input-item-group__item">
                                <input
                                  className="radio-item"
                                  type="radio"
                                  onChange={() => setChecked("Female")}
                                  checked={checked === "Female"} // so sánh checked với course.id trùng thì mới cho hiển thị
                                ></input>{" "}
                                <label>Female</label>
                              </div>
                              
                              <div className="input-item-group__item">
                                <input
                                  className="radio-item"
                                  type="radio"
                                  onChange={() => setChecked("Other")}
                                  checked={checked === "Other"} // so sánh checked với course.id trùng thì mới cho hiển thị
                                ></input>{" "}
                                <label>Other</label>
                              </div>
                              
                            </div>
                          </div>
                        </div>

                        <div className="input_field">
                          {/* <span><i aria-hidden="true" className="fa fa-lock"></i></span> */}
                          <p>Avatar</p>
                          <input type="file" onChange={handleAvata}/>
                        </div>
                      </form>
                      <div>
                      {isedit ? (
                        <div>
                          <button key={"save"} onClick={handleSave}  className="button btn-save">
                            Lưu
                          </button>
                          <button key={"cancel"}  onClick={handleCancel} className="button btn-cancel">
                            Hủy
                          </button>
                        </div>
                      ) : (
                        <button key={"add"} className="button" onClick={() =>handleAddUser()}>
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

export default ManageUser;
