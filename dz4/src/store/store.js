import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../redux/counterReducer.js";

const store = configureStore({
    reducer:{
        counter:counterReducer
    }
})
export default store