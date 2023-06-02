import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PageReducer } from "reducer/PageReducer";
import { bindPageActions } from "reducer/main";
import { UserReducer } from "reducer/UsersReducer";

export const store = configureStore({
  reducer: {
    pages: PageReducer,
    users: UserReducer,
  },
  preloadedState: {
    pages: {},
    users: {},
  },
});

const dispatch = store.dispatch;

export const actions = { ...bindPageActions(dispatch) };

export const AppProvider = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};
