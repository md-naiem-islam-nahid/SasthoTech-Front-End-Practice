import { configureStore } from "@reduxjs/toolkit";
import counter from "./Slices"

const store = configureStore({
    reducer: {
        count: counter,
    }
});


export default store;