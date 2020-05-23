import { createStore } from 'redux';

console.log('Hello Redux');

/**Reduser получает на вход состояние state и указание
 * как нужно это state изменить - action.
 * 
 * Reduser возвращает новый state.
 * 
 * Если state undefind нужно вернуть initialState, 
 * или state по умолчанию - в данном случае 0.
*/
const reduser = (state = 0, action) => {

  /**В зависимости от аction reduser возвращает измененный state */
  switch (action.type) {
    case 'INC':
      return state + 1;

    case 'DEC':
      return state - 1;
    /**Если action неизвестен, вернуть текущий state без изменений */
    default:
      return state;
  }
};

/**{ type: 'INC' } - это action - обычный JS обьект,
* обязательно имеет поле type (тип действия, которое
* нужно совершить над state)
*/

/**Инициализация store. Инициализирует state. */
const store = createStore(reduser);

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
  .addEventListener('click', () => {
    store.dispatch({ type: 'DEC' })
  })

document
  .querySelector('.inc')
  .addEventListener('click', () => {
    store.dispatch({ type: 'INC' })
  })

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