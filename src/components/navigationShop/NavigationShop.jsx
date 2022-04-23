import React, { useEffect } from "react";
import { useState } from "react";
import "./NavigationShop.css";
import {
  listProductSelector,
  listCategorySelector,
  listProductAfterFilter,
  filterPrice,
  filterCategory,
  filterManufacture,
  filterSeason,
} from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryFilterChange,
  priceFilterChange,
  seasonFilterChange,
  manufacturerFilterChange,
} from "../../redux/actions";

const NavigationShop = () => {
  const listPro = useSelector(listProductSelector);
  const listCate = useSelector(listCategorySelector);
  const listProFilter = useSelector(listProductAfterFilter);
  const initPrice = useSelector(filterPrice);
  const initCategory = useSelector(filterCategory);
  const initCompany = useSelector(filterManufacture);
  const initSeason = useSelector(filterSeason);
  console.log(initPrice);
  let listCompanyFull = [];
  for (let i = 0; i < listPro.length; i++) {
    listCompanyFull.push(listPro[i].nameCompany);
  }
  let listCompany = listCompanyFull.reduce(function (accumulator, element) {
    if (accumulator.indexOf(element) === -1) {
      accumulator.push(element);
    }
    return accumulator;
  }, []);
  console.log(listCompany);

  const listSeason = ["All", "Spring", "Summer", "Autumn", "Winter"];
  const [checked, setChecked] = useState(1);
  const dispatch = useDispatch();

  const [price, setPrice] = useState(initPrice);
  const handleInput = (e) => {
    // console.log(price)
    setPrice(e.target.value);
    dispatch(priceFilterChange(e.target.value));
  };
  console.log(price);

  // handle checkbox
  const [checkbox, setCheckbox] = useState(initCompany);
  const handleCheck = (com) => {
    setCheckbox((prev) => {
      const isChecked = checkbox.includes(com);
      if (isChecked) {
        //unCheck
        return checkbox.filter((item) => item !== com);
      } else {
        return [...prev, com];
      }
    });
  };
  useEffect(() => {
    dispatch(manufacturerFilterChange(checkbox));
  }, [checkbox]);

  // handle season
  const [season, setSeason] = useState(initSeason);

  // handle cate
  const [category, setCategory] = useState(initCategory);
  const handleCate = (name) => {
    setCategory(name);
    dispatch(categoryFilterChange(name));
  };
  return (
    <div className="">
      <div className="w-full">
        <div className="sidebar-wrapper">
          <h3>Layered Navigation</h3>
          <div className="sidebar-widget">
            <h3>Categories</h3>
            <div className="sidebar-widget-option-wrapper">
              <div
                className="sidebar-widget-option"
                onClick={() => handleCate("All Product")}
              >
                <span className = {
                      category === "All Product"
                        ? "active"
                        : ""
                    }>All Product</span>
              </div>
              {listCate.map((cate, index) => (
                <div
                  className="sidebar-widget-option"
                  key={index}
                  value={cate.name}
                  onClick={() => handleCate(cate.name)}
                  
                >
                  <span
                    className = {
                      category === cate.name
                        ? "active"
                        : ""
                    }
                  >{cate.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="sidebar-widget price-widget">
            <h3>Price Filter</h3>
            <div className="price-slider-container">
              <div>
                <input
                  type="range"
                  value={price}
                  onInput={handleInput}
                  min="0"
                  max="1000"
                />
                <h1>Price: {price} $</h1>
              </div>
            </div>
          </div>
          <div className="sidebar-widget">
            <h3>Season</h3>
            <div className="sidebar-widget-option-wrapper">
              <div className="sidebar-widget-option">
                <input
                  type="radio"
                  onChange={() => {
                    setSeason("All");
                    dispatch(seasonFilterChange("All"));
                  }}
                  checked={season === "All"} // so sánh checked với course.id trùng thì mới cho hiển thị
                ></input>
                <label>All</label>
              </div>
              <div className="sidebar-widget-option">
                <input
                  type="radio"
                  onChange={() => {
                    setSeason("Spring");
                    dispatch(seasonFilterChange("Spring"));
                  }}
                  checked={season === "Spring"} // so sánh checked với course.id trùng thì mới cho hiển thị
                ></input>
                <label>Spring</label>
              </div>
              <div className="sidebar-widget-option">
                <input
                  type="radio"
                  onChange={() => {
                    setSeason("Summer");
                    dispatch(seasonFilterChange("Summer"));
                  }}
                  checked={season === "Summer"} // so sánh checked với course.id trùng thì mới cho hiển thị
                ></input>
                <label>Summer</label>
              </div>
              <div className="sidebar-widget-option">
                <input
                  type="radio"
                  onChange={() => {
                    setSeason("Autumn");
                    dispatch(seasonFilterChange("Autumn"));
                  }}
                  checked={season === "Autumn"} // so sánh checked với course.id trùng thì mới cho hiển thị
                ></input>
                <label>Autumn</label>
              </div>
              <div className="sidebar-widget-option">
                <input
                  type="radio"
                  onChange={() => {
                    setSeason("Winter");
                    dispatch(seasonFilterChange("Winter"));
                  }}
                  checked={season === "Winter"} // so sánh checked với course.id trùng thì mới cho hiển thị
                ></input>
                <label>Winter</label>
              </div>
            </div>
          </div>
          <div className="sidebar-widget">
            <h3>Manufacturer</h3>
            <div className="sidebar-widget-option-wrapper">
              {listCompany.map((com, index) => (
                <div className="sidebar-widget-option" key={index}>
                  <input
                    type="checkbox"
                    id={`com-${index}`}
                    checked={checkbox.includes(com)} // so sánh checked với course.id trùng thì mới cho hiển thị
                    onChange={() => handleCheck(com)}
                  />
                  <label for={`com-${index}`}>{com}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sidebar-banner-img">
          <a href="#">
            <img
              src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/banner/6.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavigationShop;
