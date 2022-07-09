import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../actions/counter";

const IndexPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <>
      <h1 className="text-red-500 text-lg">
        Yee testy
      </h1>
      <h2 className="bg bg-violet-50 text-center">
        The current number is
        {count}
      </h2>
      <div className="flex bg-slate-200 justify-center transition 0.2s hover:bg-violet-500">
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type="number"
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div>
    </>
  );
};

export default IndexPage;
