import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import NavigationShop from "../../components/navigationShop/NavigationShop";
import "./ShopTest.css";
import ProductItem from "../../components/productItem/ProductItem";
import { listProductSelector } from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";


const ShopTest = () => {
  const listPro = useSelector(listProductSelector);
  const [pros, setPros] = useState(listPro);
  const [pageNumber, setPageNumber] = useState(0);

  const prosPerPage = 1;
  const pagesVisited = pageNumber * prosPerPage;
  console.log(listPro);
  const displayUsers = pros
    .slice(pagesVisited, pagesVisited + prosPerPage)
    .map((pro) => {
      return (
        <ProductItem
          id={pro.id}
          name={pro.name}
          oldprice={pro.oldprice}
          newprice={pro.price}
          imgProduct={pro.img}
          season={pro.season}
          nameCompany={pro.nameCompany}
          desc={pro.desc}
        />
      );
    });

    const pageCount = Math.ceil(pros.length / prosPerPage);

    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

  return (
    <div className="shop-area py-20 mb-20">
      <div className="max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full">
        <div className="flex  w-full">
          <div className="w-1/4">
            <NavigationShop />
          </div>
          <div className="w-3/4">
            <div className="product-tab-top">
              <div className="product-tab-top-main">
                <div className="product-tab-text">
                  <span>Showing 1 to 9 of 11 (2 pages)</span>
                </div>
                <div className="shop-results-wrapper">
                  <div className="shop-results">
                    <span>Show:</span>
                    <div className="shop-select">
                      <select name="number" id="number">
                        <option value="9">9</option>
                        <option value="12">12</option>
                        <option value="15">15</option>
                      </select>
                    </div>
                  </div>
                  <div className="shop-results">
                    <span>Sort By:</span>
                    <div className="shop-select-2">
                      <select name="sort" id="sort">
                        <option value="position">Default sorting</option>
                        <option value="p-name">Sort Popularity</option>
                        <option value="p-price">Sort Price</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list flex">
              <div className="grid grid-cols-3 gap-8">
                {displayUsers}
              </div>
              
            </div>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopTest;
