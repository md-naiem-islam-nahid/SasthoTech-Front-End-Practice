"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByValu, decrementByValu, resetByValu } from "../Services/Slices";
import './styled.css';

const Page2 = () => {
  const [localStore, setLocalStore] = useState(0);
  const GloBal = useSelector((state) => state.count.globalValue);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0); 

  return (
    <div className="pages">
      <h1> Page 2</h1>
      <hr />
      <p>This is local state: {localStore}</p>

      <p>
      <input type="number" placeholder="Enter a value here" className="Input" onChange={(e) => setValue(Number(e.target.value))} /> <br/>
        {
            console.log(typeof value, typeof value1)
        }

        <button onClick={() => setLocalStore((prev)=> prev+1)}>Increment</button>
        <button onClick={() => setLocalStore(0)}>Reset</button>
        <button onClick={() => setLocalStore((prev)=> prev-1)}>Decrement</button>
        <button onClick={() => setLocalStore((prev)=> prev+ value)}>Increment by Value</button>
        <button onClick={() => setLocalStore(value == null? 0: value)}>Reset by Value</button>
        <button onClick={() => setLocalStore((prev)=> prev-value)}>Decrement by Value</button>
      </p>

      <p>This is Global State: {GloBal}</p>
      <p>
      <input type="number" placeholder="Enter a value here" className="Input" onChange={(e) => setValue1(Number(e.target.value))} /> <br/>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByValu(value1 == null? 0: value1))}>Increment by Value</button>
        <button onClick={() => dispatch(resetByValu(value1))}>Reset by Value</button>
        <button onClick={() => dispatch(decrementByValu(value1))}>Decrement by Value</button>
      </p>

     
    </div>
  );
};

export default Page2;
