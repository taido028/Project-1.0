import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { UserReducer } from "reducer/userReducer";

const rootReducer={
    users:UserReducer
}
const store =configureStore({
    reducer: rootReducer,

});

export default store;

export const AppProvider = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}