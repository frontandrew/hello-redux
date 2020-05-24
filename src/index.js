import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import reduser from './modules/reduser';

import App from './components/app/app';

console.log('Hello Redux');

/**Инициализация store. Инициализирует state. */
const store = createStore(reduser);
// const { dispatch } = store;

/**Обернем actions в dispatch при помощи bindActionCreators */
// const { inc, dec, rnd } = bindActionCreators(actions, dispatch)
/**Dispatch принимает action и передает его в Reduser
 * вместе с текущим State. Reduser в зависимости от action
 * изменяет state. Таким образом Dispatch приводит к изменению state.
 */

/**Subscribe выполняется после каждого изменения state */
store.subscribe(() => {
  console.log(store.getState())
})

/**Компонент Provider ('react-redux') передает store в <App /> как контекст,
 * таким образом store можно получать на любом уровне в <App />.
 * 
 * Provider следит за обновлениями store(и state), и обноляет своих children
 * автоматически. Поэтому функция update и subscribe больше не требуются 
*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.root'));


/** Теперь за обновление компонентов после изменения состояния
 * следит компонент Provider.
 *
 * Update вызывает перерисовку ReactDOM, после каждого изменения state.
 * 
  const update = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('.root'));
}

/**В превый раз update() вызывается вручную, чтобы отрисовать ReactDOM
 * с первоначальным state

update();

/**В дальнейшем ReactDOM будет обновляться при помощи subscribe, тк
 * Subscribe выполняется после каждого изменения state

store.subscribe(update);

*/