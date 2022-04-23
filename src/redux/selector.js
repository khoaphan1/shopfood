import { createSelector } from "reselect";
export const listCartSelector = (state) => state.listItemInCart;
export const listProductSelector = (state) => state.listProduct;
export const listBlogSelector = (state) => state.listBlog;
export const listCategorySelector = (state) => state.listCategory;
export const listCommentSelector = (state) => state.listComment;
export const listOrderSelector = (state) => state.listOrder;
export const listUserSelector = (state) => state.listUser;
export const filterCategory = (state) => state.filtersProduct.category;
export const filterPrice = (state) => state.filtersProduct.price;
export const filterSeason = (state) => state.filtersProduct.season;
export const filterManufacture = (state) => state.filtersProduct.manufacture;
export const filterSearch = (state) => state.filtersProduct.search;

export const listProductAfterFilter = createSelector(
  listProductSelector,
  filterSearch,
  filterCategory,
  filterPrice,
  filterSeason,
  filterManufacture,
  (listProduct, searchText, category, price, season, company) => {
    return listProduct.filter((pro) => {
      if (pro.price >= price) {
        if (category === "All Product") {
          if (season === "All") {
            if (company.length === 0) {
              return pro.name.includes(searchText);
            } else {
              return (
                company.includes(pro.nameCompany) &&
                pro.name.includes(searchText)
              );
            }
          } else {
            if (company.length === 0) {
              return (
                season.includes(pro.season) && pro.name.includes(searchText)
              );
            } else {
              return (
                company.includes(pro.nameCompany) &&
                season.includes(pro.season) &&
                pro.name.includes(searchText)
              );
            }
          }
        } else {
          if (season === "All") {
            if (company.length === 0) {
              return (
                category.includes(pro.category) &&
                pro.name.includes(searchText)
              );
            } else {
              return (
                category.includes(pro.category) &&
                company.includes(pro.nameCompany) &&
                pro.name.includes(searchText)
              );
            }
          } else {
            if (company.length === 0) {
              return (
                category.includes(pro.category) &&
                season.includes(pro.season) &&
                pro.name.includes(searchText)
              );
            } else {
              return (
                category.includes(pro.category) &&
                company.includes(pro.nameCompany) &&
                season.includes(pro.season) &&
                pro.name.includes(searchText)
              );
            }
          }
        }
      }
    });
  }
);
