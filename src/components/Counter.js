import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(generateRandomNumber());

  const increaseCounter = () => {
    if (counter === 100) {
      return;
    }
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
  }

  const StepperButton = ({ onClick, dir }) => {
    let isDisabled = false;
    if (dir === "+" && counter === 100) {
      isDisabled = true;
    } else if (dir === "-" && counter === 0) {
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
