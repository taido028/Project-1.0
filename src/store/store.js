import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { GroupReducer } from "reducer/GroupReducer";
import { bindGroupActions } from "reducer/main";


export const store = configureStore({
    reducer: {
        groups: GroupReducer,
    }, 
    preloadedState:{
        groups:{},
    }
})

const dispatch=store.dispatch


export const actions={...bindGroupActions(dispatch)}

export const AppProvider = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}