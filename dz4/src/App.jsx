import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, decrementTen, increment, incrementTen, reset} from "./redux/counterReducer.js";

const App = () => {
    const dispatch= useDispatch()
    const {count} = useSelector((state) => state.counter)
    const minus = () => {
        if (count > 0) {
            dispatch(decrement())
        }
    }
    const plusTen = (ten) => {
        dispatch(incrementTen(ten))
    }
    const minusTen = (ten) => {
        if (count > 10) {
            dispatch(decrementTen(ten))
        }
    }
    return (
        <div>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={minus} >-</button>
            <button onClick={() => plusTen(10)} >+10</button>
            <button onClick={() => minusTen(10)} >-10</button>
            <button onClick={() => dispatch(reset())} >Reset</button>
        </div>
    );
};

export default App;