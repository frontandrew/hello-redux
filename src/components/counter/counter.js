import React from 'react';

// effector import
import { createStore, createEvent } from 'effector';
import { useStore } from 'effector-react';

import './counter.css'

// создаем события (некие аналоги actions из redux)
const inc = createEvent('Increment');
const dec = createEvent('Decrement');
const rnd = createEvent('Randomize');
const rst = createEvent('Reseter');


const counter = createStore(0)
  .on(inc, state => state + 1)
  .on(dec, state => state - 1)
  .on(rnd, state => {
    const module = Math.random() > 0.5 ? 1 : -1;
    const value = Math.round(Math.random() * 10 * module);
    return state + value
  })
  .reset(rst)
 
counter.watch(console.log)


const Counter = () => {
  const value = useStore(counter);

  return (
    <div className="counter jumbotron">
      <span className="counter__tag badge badge-dark">React+Effector</span>
      <h1
        className="counter__title"
        onClick={rst}>
        Counter:
      </h1>
      <h2 className="counter__count">{value}</h2>
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