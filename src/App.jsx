import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { decrement, increment } from "./features/counterSlice/counterSlice";

function App() {
  const dispatch = useDispatch();

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };

  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };

  const counter = useSelector((state) => state.counter);

  const totalCount = counter.reduce((sum, current) => sum + current.value, 0);

  return (
    <div className="appParent">
      {counter?.map((counterIndex) => (
        <div key={counterIndex.id} className="cardParent">
          <div> {counterIndex.value} </div>
          <div className="btnFlex">
            <button onClick={() => handleIncrement(counterIndex.id)}>
              Increment
            </button>
            <button onClick={() => handleDecrement(counterIndex.id)}>
              Decrement
            </button>
          </div>
        </div>
      ))}
      <p className="totalCount"> Total Count is : {totalCount}</p>
    </div>
  );
}

export default App;
