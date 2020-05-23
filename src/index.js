import { createStore, bindActionCreators } from 'redux';

import * as actions from './modules/actions';
import reduser from './modules/reduser';

import './index.css';

console.log('Hello Redux');

/**Инициализация store. Инициализирует state. */
const store = createStore(reduser);
const { dispatch } = store;

/**Обернем actions в dispatch при помощи bindActionCreators */
const { inc, dec, rnd } = bindActionCreators(actions, dispatch)

/**Subscribe выполняется после каждого изменения state */
store.subscribe(() => {
  console.log(store.getState())
})

/**Dispatch принимает action и передает его в Reduser
 * вместе со текущим State. Reduser в зависимости от action
 * изменяет state. Таким образом Dispatch приводит к изменению state.
 */
document
  .querySelector('.dec')
  .addEventListener('click', () => dec());

document
  .querySelector('.rnd')
  .addEventListener('click', () => {
    const value = Math.floor(Math.random() * 10);
    const payload = Math.floor(Math.random() * 10) <= 4 ? -value : value;

    /**Action в качестве дополнительных параметров может
     * получать дополнительные поля обьекта.
     */
    rnd(payload);
  });

document
  .querySelector('.inc')
  .addEventListener('click', () => inc());

/**Update записывает значение state в ноду counter */
const update = () => {
  document
    .querySelector('.counter')
    .textContent = store.getState();
}

/**Subscribe выполняется после каждого изменения state.
 * Таким образом мы вызываем Update после каждого обновления state,
 * перерендериваем сounter на странице
 */
store.subscribe(update);