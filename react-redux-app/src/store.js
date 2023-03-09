import rootReducer from "./reducer";
import { createStore } from "redux";

// creating centralised redux store...
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
