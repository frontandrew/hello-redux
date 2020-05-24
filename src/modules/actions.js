/**{ type: 'INC' } - это action - обычный JS обьект,
* обязательно имеет поле type (тип действия, которое
* нужно совершить над state)
*
* Создание action можно вынести в отдельную функцию.
*/
export const inc = () => ({ type: 'INC' });
export const rnd = () => {
  const value = Math.floor(Math.random() * 10);
  const payload = Math.floor(Math.random() * 10) <= 4 ? -value : value;

  return {
    type: 'RND',
    payload: payload
  }
};
export const dec = () => ({ type: 'DEC' });

/**Action в качестве дополнительных параметров может
 * иметь дополнительные поля обьекта.
 */