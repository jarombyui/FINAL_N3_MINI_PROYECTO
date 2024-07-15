import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import staysSlice from "../../Store/staysSlice";

const Counter = ({ type }) => {
  const dispatch = useDispatch();
  const { setGuestNumber } = staysSlice.actions;
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    dispatch(setGuestNumber({ type: type, count: counter }));
  }, [counter, dispatch, type, setGuestNumber]);

  const subtractHandler = () => {
    setCounter((prevCounter) => {
      if (prevCounter <= 0) {
        return 0;
      }
      return prevCounter - 1;
    });
  };
  const addHandler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  return (
    <div className="flex mt-3" key={type}>
      <Button
        type="button"
        className="border border-gray4 flex items-center rounded-[0.2rem] px-1"
        onClick={() => subtractHandler(type)}
      >
        <span className="material-symbols-outlined counter text-gray4 text-base">
          remove
        </span>
      </Button>
      <Input
        type="number"
        value={counter}
        name="counter"
        min="0"
        readOnly
        className="text-center appearance-none m-0 w-14"
      />
      <Button
        type="button"
        className="border border-gray4 flex items-center rounded-[0.2rem] px-1"
        onClick={addHandler}
      >
        <span className="material-symbols-outlined counter text-gray4 text-base">
          add
        </span>
      </Button>
    </div>
  );
};

export default Counter;
