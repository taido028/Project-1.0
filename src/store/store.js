import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PageReducer } from "reducer/PageReducer";
import { bindGroupActions } from "reducer/main";

export const store = configureStore({
  reducer: {
    pages: PageReducer,
  },
  preloadedState: {
    pages: {},
  },
});

const dispatch = store.dispatch;

export const actions = { ...bindGroupActions(dispatch) };

export const AppProvider = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};
