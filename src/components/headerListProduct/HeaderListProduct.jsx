import React from "react";
import "./HeaderListProduct.css";

const HeaderListProduct = ({titleName}) => {
  return (
    <div className="container max-w-6xl mr-auto ml-auto pl-4 pr-4 w-full">
      <div className="text-center">
        <div className="relative flex justify-center text-center">
          <img src="" alt="" className="line-left" />
          <img
            src="https://template.hasthemes.com/naturecircle/naturecircle/assets/img/icon/title.png"
            alt=""
          />
          <img src="" alt="" className="line-right" />
        </div>
        <h2 className="title-header-product">
          <span>Organic </span>
          {titleName}
          {/* featured product */}
        </h2>
      </div>
    </div>
  );
};

export default HeaderListProduct;
