import React from 'react';
import ReactDOM from 'react-dom';

console.log('Hello Redux');

/**Reduser получает на вход состояние state и указание
 * как нужно это state изменить - action.
 * 
 * Reduser возвращает новый state.
*/
const reduser = (state = 0, action) => {

  // в зависимости от аction reduser возвращает измененный state
  switch (action.type) {
    case 'INC':
      return state + 1;

    case 'DEC':
      return state - 1;

    default:
      return state;
  }
};

/** { type: 'INC' } - это action - обычный JS обьект,
* обязательно имеет поле type (тип действия, которое
* нужно совершить над state)
*/

//первая инициализация state
let state = reduser(undefined, {})

state = reduser(state, { type: 'INC' });
console.log(state);

state = reduser(state, { type: 'INC' });
console.log(state);

state = reduser(state, { type: 'DEC' });
console.log(state);