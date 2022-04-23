import React, { useState, useEffect, useRef } from "react";
import "./ManageProduct.css";
import { listProductSelector } from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import HeaderAndBarAdmin from "../../components/headerAndBarAdmin/HeaderAndBarAdmin";
import ReactPaginate from "react-paginate";
import { listCategorySelector } from "../../redux/selector";
import { addNewProduct, editProduct, deleteProduct } from "../../redux/actions";


const ManageProduct = () => {
  const listPro = useSelector(listProductSelector);
  const listCate = useSelector(listCategorySelector);
  const [idedit, setIdedit] = useState();
  const [pros, setPros] = useState(listPro);
  const [pageNumber, setPageNumber] = useState(0);

  
  // handle Open modal
  const [isedit, setIsedit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  let modalRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!modalRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsedit(false)
        setName("")
        setOldPrice("")
        setPrice("")
        setQuality("")
        setCompany("")
        setDescription("")
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // handle input
  const [checked, setChecked] = useState("Spring");
  const [name, setName] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [price, setPrice] = useState("");
  const [quality, setQuality] = useState("");
  const [rating, setRating] = useState(5);
  const [category, setCategory] = useState(listCate[1].name);
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState();
  useEffect(()=> {
    return() => {
      img && URL.revokeObjectURL(img.preview)
    }
  }, [img])

  const hanldeSetName = (e) => {
    setName(e.target.value)
  }
  const hanldeSetQuality = (e) => {
    setQuality(e.target.value)
  }
  const hanldeSetOldPrice = (e) => {
    setOldPrice(e.target.value)
  }
  const hanldeSetPrice = (e) => {
    setPrice(e.target.value)
  }
  const hanldeSetCompany = (e) => {
    setCompany(e.target.value)
  }
  const hanldeSetRating = (e) => {
    setRating(e.target.value)
  }
  const hanldeSetDescription = (e) => {
    setDescription(e.target.value)
  }

  const hanldeSetCategory = (e) => {
    setCategory(e.target.value)
  }
  const handleImgProduct = (e) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)
    setImg(file.preview)
  }
  
  //////////////////////////

  // dispatch action
  const dispatch = useDispatch();
  const handleAddProduct = () => {
    dispatch(
      addNewProduct({
        id: listPro.length + 1,
        name,
        oldprice: oldPrice,
        price,
        quality,
        rating,
        season: checked,
        category : category,
        nameCompany : company,
        desc : description,
        img: img
      })
    )
    setName("")
    setOldPrice("")
    setPrice("")
    setQuality("")
    setCompany("")
    setDescription("")
  }
  const handleEdit = (id) => {
    setIsedit(true)
    setIdedit(id)
    console.log(id)
    setIsOpen(true)
    setName(listPro[id-1].name)
    setOldPrice(listPro[id-1].oldprice)
    setPrice(listPro[id-1].price)
    setQuality(listPro[id-1].quality)
    setCompany(listPro[id-1].nameCompany)
    setDescription(listPro[id-1].desc)
    setChecked(listPro[id-1].season)
    setCategory(listPro[id-1].category)
    setRating(listPro[id-1].rating)
  }

  const handleCancel = () => {
    setIsedit(false)
    setIsOpen(false)
    setName("")
    setOldPrice("")
    setPrice("")
    setQuality("")
    setCompany("")
    setDescription("")
  }

  const handleSave = () => {
    dispatch(
      editProduct({
        stt : idedit -1,
        replacePro : {
          id : idedit,
          name,
          oldprice: oldPrice,
          price,
          quality,
          rating,
          season: checked,
          category : category,
          nameCompany : company,
          desc : description,
          img: img
        }
      })
    )
    setIsOpen(false)
    setIsedit(false)
    setName("")
    setOldPrice("")
    setPrice("")
    setQuality("")
    setCompany("")
    setDescription("")
  }

  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
  }

  // handle Pagination
  const prosPerPage = 5;
  const pagesVisited = pageNumber * prosPerPage;
  console.log(listPro);
  const displayUsers = pros
    .slice(pagesVisited, pagesVisited + prosPerPage)
    .map((pro,index) => {
      return (
        <tr key={index}>
          <td>{pro.id}</td>
          <td>{pro.name}</td>
          <td>
            <img key={pro.id} src={pro.img} alt="" width="80%" />
          </td>
          <td>{pro.oldprice}</td>
          <td>{pro.price}</td>
          <td>{pro.quality}</td>
          <td>{pro.rating}</td>
          <td>{pro.category}</td>
          <td>{pro.season}</td>
          <td>{pro.nameCompany}</td>
          <td>
            <p>{pro.desc}</p>
          </td>
          <td>
            <div className="fill-button">
              <button onClick={() => handleEdit(Number(pro.id))} className="btn-handle">Edit</button>
              <button onClick={() => handleDelete(Number(pro.id))} className="btn-handle btn-delete">Delete</button>
            </div>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(pros.length / prosPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <HeaderAndBarAdmin active="Shop" />
      <section id="content">
        <nav>
          <i className="bx fa-solid fa-bars"></i>
          <a href="#" className="nav-link">
            Product
          </a>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label for="switch-mode" className="switch-mode"></label>
          <a href="#" className="notification">
            <i className="fa-solid fa-bell"></i>
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <img src="https://i.pinimg.com/736x/af/5c/9e/af5c9e4d3073b223d290cf14543e34c0.jpg" />
          </a>
        </nav>

        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <i className="bx fa-solid fa-angle-right"></i>
                </li>
                <li>
                  <a className="active" href="#">
                    Product
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button className="add-new" onClick={() => setIsOpen((isOpen) => !isOpen)}>
            Add new
          </button>
          <div className="table-users">
            <div className="header">List Product</div>

            <table cellSpacing="0" className="table-main">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Picture</th>
                  <th>Old Price</th>
                  <th>New Price</th>
                  <th>Quality</th>
                  <th>Rating</th>
                  <th>Category</th>
                  <th>Season</th>
                  <th>Company</th>
                  <th>Description</th>
                  <th>Handle</th>
                </tr>
              </thead>

              <tbody >
               
                {/* {displayUsers} */}
                {listPro.map((pro, index) => (
                  <tr>
                  <td>{pro.id}</td>
                  <td>{pro.name}</td>
                  <td>
                    <img key={pro.id} src={pro.img} alt="" width="80%" />
                  </td>
                  <td>{pro.oldprice}</td>
                  <td>{pro.price}</td>
                  <td>{pro.quality}</td>
                  <td>{pro.rating}</td>
                  <td>{pro.category}</td>
                  <td>{pro.season}</td>
                  <td>{pro.nameCompany}</td>
                  <td>
                    <p>{pro.desc}</p>
                  </td>
                  <td>
                    <div className="fill-button">
                      <button onClick={() => handleEdit(Number(pro.id))} className="btn-handle">Edit</button>
                      <button onClick={() => handleDelete(index)} className="btn-handle btn-delete">Delete</button>
                    </div>
                  </td>
                </tr>
                ))}
                
              </tbody>
              
              
            </table>
            {/* <div className="pagi-bottom">
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  marginPagesDisplayed={1}
                  forcePage={1}
                  pageRangeDisplayed={2}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </div> */}
          </div>
        </main>
      </section>
      {isOpen && (
        <div className="modal">
          <div className="modal-container" ref={modalRef}>
            <div className="form_wrapper">
              <div className="form_container">
                <div className="title_container">
                  <h2>Manage Shop</h2>
                </div>

                <div className="row clearfix">
                  <div>
                    <form>
                      <div className="row clearfix">
                        <div className="col_half">
                          <div className="input_field">
                            <span>
                              <i aria-hidden="true" className="fa fa-user"></i>
                            </span>
                            <input
                              type="text"
                              placeholder="Enter Product Name"
                              value={name}
                              onChange={hanldeSetName}
                            />
                          </div>
                        </div>
                        <div className="col_half">
                          <div className="input_field">
                            <span>
                              <i aria-hidden="true" className="fa fa-user"></i>
                            </span>
                            <input type="text" placeholder="Enter Quality" onChange={hanldeSetQuality} value={quality} />
                          </div>
                        </div>
                      </div>

                      <div className="row clearfix">
                        <div className="col_half">
                          <div className="input_field">
                            <span>
                              <i aria-hidden="true" className="fa fa-user"></i>
                            </span>
                            <input type="text" value={oldPrice} onChange={hanldeSetOldPrice} placeholder="Enter Old Price" />
                          </div>
                        </div>
                        <div className="col_half">
                          <div className="input_field">
                            <span>
                              <i aria-hidden="true" className="fa fa-user"></i>
                            </span>
                            <input type="text" value={price} onChange={hanldeSetPrice} placeholder="Enter New Price" />
                          </div>
                        </div>
                      </div>

                      <div className="row clearfix">
                        <div className="col_half">
                          <div className="input_field">
                            <span>
                              <i aria-hidden="true" className="fa fa-user"></i>
                            </span>
                            <input type="text" value={company} onChange={hanldeSetCompany} placeholder="Enter Company" />
                          </div>
                        </div>
                        <div className="col_half">
                          <div className="input_field">
                            <span>
                              <i aria-hidden="true" className="fa fa-user"></i>
                            </span>
                            <input
                              type="text"
                              placeholder="Enter Description"
                              value={description}
                              onChange={hanldeSetDescription}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="input-group-row">
                        <div className="input-item input-item-nav">
                          <p className="input-text-name">Rating</p>
                        </div>
                        <div className="input-item input-item-nav">
                          <p className="input-text-name">Category</p>
                        </div>
                        <div className="input-item input-item-nav">
                          <p className="input-text-name">Season</p>
                        </div>
                      </div>

                      <div className="input-group-row">
                        <div className="input-item input-item-nav">
                          <select className="select-group" value={rating} onChange={hanldeSetRating}>
                            <option value={1}>1 star</option>
                            <option value={2}>2 star</option>
                            <option value={3}>3 star</option>
                            <option value={4}>4 star</option>
                            <option value={5}>5 star</option>
                          </select>
                        </div>
                        <div className="input-item input-item-nav">
                          <select className="select-group" value={category} onChange={hanldeSetCategory}>
                            {listCate.map((cate, index) => (
                              <option key={index}>{cate.name}</option>
                            ))}
                            {/* <option value="on">Still in use</option>
                            <option value="off">Expire</option> */}
                          </select>
                        </div>
                        <div className="input-item input-item-nav">
                          <div className="input-item-group">
                            <div className="input-item-group__item">
                              <input
                                className="radio-item"
                                type="radio"
                                onChange={() => setChecked("Spring")}
                                checked={checked === "Spring"} // so sánh checked với course.id trùng thì mới cho hiển thị
                              ></input>{" "}
                              <label>Spring</label>
                            </div>

                            <div className="input-item-group__item">
                              <input
                                className="radio-item"
                                type="radio"
                                onChange={() => setChecked("Summer")}
                                checked={checked === "Summer"} // so sánh checked với course.id trùng thì mới cho hiển thị
                              ></input>{" "}
                              <label>Summer</label>
                            </div>

                            <div className="input-item-group__item">
                              <input
                                className="radio-item"
                                type="radio"
                                onChange={() => setChecked("Autumn")}
                                checked={checked === "Autumn"} // so sánh checked với course.id trùng thì mới cho hiển thị
                              ></input>{" "}
                              <label>Autumn</label>
                            </div>

                            <div className="input-item-group__item">
                              <input
                                className="radio-item"
                                type="radio"
                                onChange={() => setChecked("Winter")}
                                checked={checked === "Winter"} // so sánh checked với course.id trùng thì mới cho hiển thị
                              ></input>{" "}
                              <label>Winter</label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="input_field">
                        {/* <span><i aria-hidden="true" className="fa fa-lock"></i></span> */}
                        <p>Picture Product</p>
                        <input type="file" onChange={handleImgProduct}/>
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
                        <button key={"add"} className="button" onClick={() =>handleAddProduct()}>
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
    </div>
  );
};

export default ManageProduct;
