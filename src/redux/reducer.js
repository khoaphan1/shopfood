import ListProduct from "../fakeData/ListProduct";
import ListBlog from "../fakeData/ListBlog";
import Category from "../fakeData/Category";
import User from "../fakeData/User";
import Order from "../fakeData/Order";

const innitState = {
  listProduct: [...ListProduct],
  listBlog: [...ListBlog],
  listCategory: [...Category],
  listItemInCart: [],
  listOrder: [...Order],
  listUser: [...User],
  listComment: [
    {
      id: 1,
      content: "Bài viết này rất hay",
      star: 4,
      commentDay: "20/3/2020",
      author: "Khoa Phan",
      itemId: 1,
      category: "blog",
    },
    {
      id: 2,
      content: "Sản phẩm tốt",
      star: 5,
      commentDay: "22/3/2020",
      author: "Nam Phan",
      itemId: 2,
      category: "product",
    },
    {
      id: 3,
      content: "Bài viết ổn",
      star: 3,
      commentDay: "20/6/2020",
      author: "Khoa Phan",
      itemId: 1,
      category: "blog",
    },
    {
      id: 4,
      content: "Sản phẩm sạch",
      star: 5,
      commentDay: "26/3/2020",
      author: "Hanh Phan",
      itemId: 1,
      category: "product",
    },
  ],
  filtersProduct: {
    search: "",
    category: "All Product",
    price: 0,
    season: "All",
    manufacture: [],
  },
};

const rootReducer = (state = innitState, action) => {
  console.log(innitState.listOrder);
  switch (action.type) {
    case "Cart/addProductToCart":
      // return {
      //     ...state,
      //     listItemInCart: [
      //         ...state.listItemInCart,
      //         action.payload
      //     ]
      // }
      // Great Item data from products array
      const item = state.listProduct.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.listItemInCart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        listItemInCart: inCart
          ? state.listItemInCart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + Number(action.payload.qty) }
                : item
            )
          : [
              ...state.listItemInCart,
              { ...item, qty: Number(action.payload.qty) },
            ],
      };
    case "Cart/adjustItemQty":
      return {
        ...state,
        listItemInCart: state.listItemInCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case "Cart/removeFromCart":
      return {
        ...state,
        listItemInCart: state.listItemInCart.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "Admin/addNewCategory":
      return {
        ...state,
        listCategory: [...state.listCategory, action.payload],
      };
    case "Admin/editCategory":
      const repCate = [...state.listCategory];
      repCate[action.payload.stt] = action.payload.replaceCate;
      return {
        ...state,
        listCategory: repCate,
      };
    case "Admin/deleteCategory":
      const newCate = [...state.listCategory];
      newCate.splice(action.payload, 1);

      return {
        ...state,
        listCategory: newCate,
      };
    case "Admin/addNewProduct":
      return {
        ...state,
        listProduct: [...state.listProduct, action.payload],
      };
    case "Admin/editProduct":
      const repPro = [...state.listProduct];
      repPro[action.payload.stt] = action.payload.replacePro;
      return {
        ...state,
        listProduct: repPro,
      };
    case "Admin/deleteProduct":
      const newPro = [...state.listProduct];
      newPro.splice(action.payload, 1);

      return {
        ...state,
        listProduct: newPro,
      };
    case "Admin/addNewUser":
      return {
        ...state,
        listUser: [...state.listUser, action.payload],
      };
    case "Admin/editUser":
      const repUser = [...state.listUser];
      repUser[action.payload.stt] = action.payload.replaceUser;
      return {
        ...state,
        listUser: repUser,
      };
    case "Admin/deleteUser":
      const newUser = [...state.listUser];
      newUser.splice(action.payload, 1);

      return {
        ...state,
        listUser: newUser,
      };
    case "Admin/addNewComment":
      return {
        ...state,
        listComment: [...state.listComment, action.payload],
      };
    case "Admin/editComment":
      const repCmt = [...state.listComment];
      repCmt[action.payload.stt] = action.payload.replaceCmt;
      return {
        ...state,
        listComment: repCmt,
      };
    case "Admin/deleteComment":
      const newCmt = [...state.listComment];
      newCmt.splice(action.payload, 1);

      return {
        ...state,
        listComment: newCmt,
      };
    case "Admin/addNewBlog":
      return {
        ...state,
        listBlog: [...state.listBlog, action.payload],
      };
    case "Admin/editBlog":
      const repBlog = [...state.listBlog];
      repBlog[action.payload.stt] = action.payload.replaceBlog;
      return {
        ...state,
        listBlog: repBlog,
      };
    case "Admin/deleteBlog":
      const newBlog = [...state.listBlog];
      newBlog.splice(action.payload, 1);

      return {
        ...state,
        listBlog: newBlog,
      };
    case "Admin/addNewOrder":
      console.log(innitState.listOrder);
      return {
        ...state,
        listOrder: [...state.listOrder, action.payload],
      };
    case "Admin/editOrder":
      const repOrder = [...state.listOrder];
      repOrder[action.payload.stt].status = action.payload.replaceOrder.status;
      return {
        ...state,
        listOrder: repOrder,
      };
    case "Admin/deleteOrder":
      const newOrder = [...state.listOrder];
      newOrder.splice(action.payload, 1);

      return {
        ...state,
        listOrder: newOrder,
      };

    case "Filter/categoryChange":
      return {
        ...state,
        filtersProduct: {
          ...state.filtersProduct,
          category: action.payload,
        },
      };
    case "Filter/priceChange":
      return {
        ...state,
        filtersProduct: {
          ...state.filtersProduct,
          price: action.payload,
        },
      };
    case "Filter/seasonChange":
      return {
        ...state,
        filtersProduct: {
          ...state.filtersProduct,
          season: action.payload,
        },
      };
    case "Filter/manufacturerChange":
      return {
        ...state,
        filtersProduct: {
          ...state.filtersProduct,
          manufacture: action.payload,
        },
      };
    case "Filter/searchChange":
      return {
        ...state,
        filtersProduct: {
          ...state.filtersProduct,
          search: action.payload,
        },
      };
    default:
      return state;
  }
  return state;
};

export default rootReducer;
