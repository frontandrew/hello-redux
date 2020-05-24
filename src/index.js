import { createStore, bindActionCreators } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

import * as actions from './modules/actions';
import reduser from './modules/reduser';

import Counter from './components/counter/counter';

console.log('Hello Redux');

/**Инициализация store. Инициализирует state. */
const store = createStore(reduser);
const { dispatch } = store;

/**Обернем actions в dispatch при помощи bindActionCreators */
const { inc, dec, rnd } = bindActionCreators(actions, dispatch)
/**Dispatch принимает action и передает его в Reduser
 * вместе с текущим State. Reduser в зависимости от action
 * изменяет state. Таким образом Dispatch приводит к изменению state.
 */

/**Subscribe выполняется после каждого изменения state */
store.subscribe(() => {
  console.log(store.getState())
})

/**Update вызывает перерисовку ReactDOM, после каждого изменения state */
const update = () => {
  ReactDOM.render(
    <Counter
      inc={inc}
      dec={dec}
      rnd={() => {
        const value = Math.floor(Math.random() * 10);
        const payload = Math.floor(Math.random() * 10) <= 4 ? -value : value;

        /**Action в качестве дополнительных параметров может
         * получать дополнительные поля обьекта.
         */
        rnd(payload);
      }}
      counter={store.getState()} />,
    document.querySelector('.root')
  );
}

/**В превый раз update() вызывается вручную, чтобы отрисовать ReactDOM
 * с первоначальным state
 */
update();

/**В дальнейшем ReactDOM будет обновляться при помощи subscribe, тк
 * Subscribe выполняется после каждого изменения state 
 */
store.subscribe(update);

