import React, { useState, useEffect, useRef } from "react";
import { listOrderSelector } from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import HeaderAndBarAdmin from "../../components/headerAndBarAdmin/HeaderAndBarAdmin";
import { editOrder, deleteOrder } from "../../redux/actions";

export const ManageOrder = () => {
  const listOrder = useSelector(listOrderSelector);
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

  const [status, setStatus] = useState("");
  const hanldeSetStatus = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };
  const dispatch = useDispatch();
  
  const handleEdit = (id) => {
    setIdedit(id);
    console.log(id);
    setIsOpen(true);
    setStatus(listOrder[id - 1].status);
  };

  const handleCancel = () => {
    setIsOpen(false);
    setStatus("");
  };

  const handleSave = () => {
    dispatch(
      editOrder({
        stt: idedit - 1,
        replaceOrder: {
          id: idedit,
          status: status,
        },
      })
    );
    setIsOpen(false);
    setStatus("");
  };

  const handleDelete = (id) => {
    dispatch(deleteOrder(id));
  };
  return (
    <div>
      <>
        <HeaderAndBarAdmin active="Order" />
        <section id="content">
          <nav>
            <i class="bx fa-solid fa-bars"></i>
            <a href="#" class="nav-link">
              Order
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
                      Order
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
                    <th>Name Receiver</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Note</th>
                    <th>Total Bill</th>
                    <th>Status</th>
                    <th>Handle</th>
                  </tr>
                </thead>

                <tbody>
                  {listOrder.map((order, index) => (
                    <tr>
                      <td>{order.id}</td>
                      <td>{order.nameReceiver}</td>
                      <td>{order.phone}</td>
                      <td>{order.email}</td>
                      <td>{order.address}</td>
                      <td>{order.note}</td>
                      <td>{order.totalBill}</td>
                      <td>{order.status}</td>

                      <td>
                        <div className="fill-button">
                          <button
                            className="btn-handle"
                            onClick={() => handleEdit(Number(order.id))}
                          >
                            Edit
                          </button>
                          <button
                            className="btn-handle btn-delete"
                            onClick={() => handleDelete(index)}
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
                    <h2>Manage Status Order</h2>
                  </div>

                  <div className="row clearfix">
                    <div>
                      <form>
                        <div className="row clearfix">
                          <div className="col_half">
                            <div className="input_field">
                              <p>Status Order</p>
                              <div className="input-item input-item-nav">
                                <select
                                  className="select-group"
                                  value={status}
                                  onChange={hanldeSetStatus}
                                >
                                  <option value="Waiting">Waiting</option>
                                  <option value="Shipping">Shipping</option>
                                  <option value="Delivered">Delivered</option>
                                  <option value="Received">Received</option>
                                  <option value="Cancelled">Cancelled</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div>
                        <div>
                          <button
                            key={"save"}
                            className="button btn-save"
                            onClick={handleSave}
                          >
                            Lưu
                          </button>
                          <button
                            key={"cancel"}
                            className="button btn-cancel"
                            onClick={handleCancel}
                          >
                            Hủy
                          </button>
                        </div>
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
