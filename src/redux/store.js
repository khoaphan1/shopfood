import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools();

// createStore() nhận vào 3 tham số
// - tham số đầu tiên là rootReducer là 1 function 
// dùng để cập nhật lại các state trong kho chung này (kho store)
// - tham số thứ 2 là innitValue khi cần xét 1 giá trị mặc định nào đó
// - tham số thứ 3 là enhancers là 1 middle ware

const store = createStore(rootReducer, composeEnhancers);

export default store;
