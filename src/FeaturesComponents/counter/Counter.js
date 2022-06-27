import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount, decrementByAmount } from "./counterSlice";



const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();
    return(
        <div>
            <p className="zero">{ count }</p>
            <button className="btn btn-primary mx-2" onClick={() => {dispatch(increment())}}>Increment by 1</button>
            <button className="btn btn-success mx-2" onClick={() => {dispatch(decrement())}}>Decrement by 1</button>
            <button className="btn btn-secondary mx-2" onClick={() => {dispatch(incrementByAmount())}}> Increase by 10</button>
            <button className="btn btn-danger mx-2" onClick={() => {dispatch(decrementByAmount())}}>Decrease by 10</button>
        </div>
    )
}

export default Counter;