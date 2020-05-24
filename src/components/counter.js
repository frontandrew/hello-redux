import React from 'react';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="counter jumbotron">
      <h1 className="counter__title">Counter:</h1>
      <h2 className="counter__count">{counter}</h2>
      <div className="counter__controls btn-group">
        <button
          onClick={dec}
          className="dec btn btn-primary btn-lg">
          DEC
        </button>
        <button
          onClick={rnd}
          className="rnd btn btn-primary btn-lg">
          RND
        </button>
        <button
          onClick={inc}
          className="inc btn btn-primary btn-lg">
          INC
        </button>
      </div>
    </div>
  );
}

export default Counter;