import React, { useState } from "react";

const Counter = () => {
  
  const range = [0, 100];
  const max = range[1] - 1;
  const min = range[0] + 1;

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (range[1] - range[0])) + range[0];
  };

  const [counter, setCounter] = useState(generateRandomNumber());

  const increaseCounter = () => {
    if (counter === max) {
      return;
    }
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    if (counter === min) {
      return;
    }
    setCounter(counter - 1);
  };


  const StepperButton = ({ onClick, dir }) => {
    let isDisabled = false;
    if (dir === "+" && counter === max) {
      isDisabled = true;
    } else if (dir === "-" && counter === min) {
      isDisabled = true;
    }

    return (
      <button
        className={`${dir === "+" ? "green" : "red"} button stepper `}
        disabled={isDisabled}
        onClick={onClick}
      >
        {dir}
      </button>
    );
  };

  return (
    <div className="component counter">
      <div className="display">
        <input type="text" value={counter} readOnly />
      </div>
      <div className="flex-container">
        <StepperButton onClick={decreaseCounter} dir="-" />
        <StepperButton onClick={increaseCounter} dir="+" />
        <button
          className="button roller"
          onClick={() => setCounter(generateRandomNumber())}
        >
          Reroll
        </button>
      </div>
    </div>
  );
};

export default Counter;
