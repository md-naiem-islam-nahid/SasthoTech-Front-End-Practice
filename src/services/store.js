import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./addReducer";

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});

export default store;
