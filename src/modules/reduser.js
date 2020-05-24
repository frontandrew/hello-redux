/**Reduser получает на вход состояние state и указание
 * как нужно это state изменить - action.
 * 
 * Reduser возвращает новый state.
 * 
 * Если state undefind нужно вернуть initialState, 
 * или state по умолчанию - в данном случае 0.
*/
const reduser = (state = 69, action) => {

  /**В зависимости от аction reduser возвращает измененный state */
  switch (action.type) {
    case 'INC':
      return state + 1;

    case 'RND':
      /**Обьект action может иметь в себе дополнительные значения, 
       * кроме action.type, необходимые для действий со state.
       */
      return state + action.payload;

    case 'DEC':
      return state - 1;
    /**Если action неизвестен, вернуть текущий state без изменений */
    default:
      return state;
  }
};

export default reduser;