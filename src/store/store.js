import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PageReducer } from "reducer/PageReducer";
import { bindPageActions } from "reducer/main";

/**
 * Configures and creates the Redux store with PageReducer as a reducer.
 * The pages property in the preloaded state is initialized as an empty object.
 */
export const store = configureStore({
  reducer: {
    pages: PageReducer,
  },
  preloadedState: {
    pages: {},
  },
});

const dispatch = store.dispatch;

/**
 * Binds page actions to the store's dispatch function.
 */
export const actions = { ...bindPageActions(dispatch) };

/**
 * The main provider component for the app.
 * Wraps the application with the Redux provider that makes the Redux store available to the rest of the app.
 *
 * @param {Object} props - The properties passed to this component, including children.
 * @returns {JSX.Element} The provider-wrapped app.
 */
export const AppProvider = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};
