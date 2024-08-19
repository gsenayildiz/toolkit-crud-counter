import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, setCount } from "../redux/slices/counterSlice";


const Counter = () => {
   const dispatch = useDispatch();
   const { count } = useSelector((store) => store.counterReducer);
   //console.log(count);


  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="d-flex gap-4 align-items-center">
      <button className="btn btn-danger"
      onClick={() => dispatch(decrease())}>Azalt</button>
      <span>{count}</span>
      <button 
      className="btn btn-success"
      onClick={() => dispatch(increase())}>Arttır</button>
      <button className="btn btn-primary"
      onClick={() => dispatch(setCount(0))}>Sıfırla</button>
      </div>
    </div>
  )
}

export default Counter;
