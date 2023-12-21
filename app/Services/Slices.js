const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    globalValue: 0,
}


const CounterSlices = createSlice({
    name: "counter",
    initialState,

    reducers:{
        increment: (state) => {
            state.globalValue += 1;
        },

        decrement: (state) => {
            state.globalValue -= 1;
        },

        reset : (state) => {
            state.globalValue = 0;
        },

        incrementByValu: (state, action) =>{
            state.globalValue += action.payload;
        },

        decrementByValu: (state, action) =>{
            state.globalValue -= action.payload;
        },
        
        resetByValu: (state, action) =>{
            state.globalValue = action.payload;
        }
    }
})


export const { increment, decrement, reset, incrementByValu, decrementByValu, resetByValu } =  CounterSlices.actions;

export default CounterSlices.reducer;