export const addProductToCart = (itemId, qty) => {
  return {
    type: "Cart/addProductToCart",
    payload: {
      id: itemId,
      qty
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: "Cart/adjustItemQty",
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: "Cart/removeFromCart",
    payload: {
      id: itemID,
    },
  };
};

// CATEGORY
export const addNewCategory = (payload) => {
  return {
    type: "Admin/addNewCategory",
    payload
  };
};

export const editCategory = (payload) => {
  return {
    type: "Admin/editCategory",
    payload
  };
};

export const deleteCategory = (payload) => {
  return {
    type: "Admin/deleteCategory",
    payload
  };
};

// PRODUCT
export const addNewProduct = (payload) => {
  return {
    type: "Admin/addNewProduct",
    payload
  };
};

export const editProduct = (payload) => {
  return {
    type: "Admin/editProduct",
    payload
  };
};

export const deleteProduct = (payload) => {
  return {
    type: "Admin/deleteProduct",
    payload
  };
};

// USER
export const addNewUser = (payload) => {
  return {
    type: "Admin/addNewUser",
    payload
  };
};

export const editUser = (payload) => {
  return {
    type: "Admin/editUser",
    payload
  };
};

export const deleteUser = (payload) => {
  return {
    type: "Admin/deleteUser",
    payload
  };
};

//Comment
export const addNewComment = (payload) => {
  return {
    type: "Admin/addNewComment",
    payload
  };
};

export const editComment = (payload) => {
  return {
    type: "Admin/editComment",
    payload
  };
};

export const deleteComment = (payload) => {
  return {
    type: "Admin/deleteComment",
    payload
  };
};

//Blog
export const addNewBlog = (payload) => {
  return {
    type: "Admin/addNewBlog",
    payload
  };
};

export const editBlog = (payload) => {
  return {
    type: "Admin/editBlog",
    payload
  };
};

export const deleteBlog = (payload) => {
  return {
    type: "Admin/deleteBlog",
    payload
  };
};

//Order
export const addNewOrder = (payload) => {
  return {
    type: "Admin/addNewOrder",
    payload
  };
};

export const editOrder = (payload) => {
  return {
    type: "Admin/editOrder",
    payload
  };
};

export const deleteOrder = (payload) => {
  return {
    type: "Admin/deleteOrder",
    payload
  };
};

export const categoryFilterChange = (payload) => {
  return {
    type: "Filter/categoryChange",
    payload
  };
};

export const priceFilterChange = (payload) => {
  return {
    type: "Filter/priceChange",
    payload
  };
};

export const seasonFilterChange = (payload) => {
  return {
    type: "Filter/seasonChange",
    payload
  };
};

export const manufacturerFilterChange = (payload) => {
  return {
    type: "Filter/manufacturerChange",
    payload
  };
};

export const searchChange = (payload) => {
  return {
    type: "Filter/searchChange",
    payload
  };
};