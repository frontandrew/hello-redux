import { createStore, bindActionCreators } from 'redux';

import reduser from './reduser';
import * as actions from './actions';

const store = createStore(reduser);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const renderCount = () => {
  document
    .getElementById('counter')
    .textContent = store.getState()
}

document
  .getElementById('inc')
  .addEventListener('click', () => inc());

document
  .getElementById('dec')
  .addEventListener('click', () => dec());

document
  .getElementById('rnd')
  .addEventListener('click', () => {
    const count = Math.floor(Math.random() * 10);
    rnd(count);
  });

store.subscribe(renderCount);