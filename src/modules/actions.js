/**{ type: 'INC' } - это action - обычный JS обьект,
* обязательно имеет поле type (тип действия, которое
* нужно совершить над state)
*
* Создание action можно вынести в отдельную функцию.
*/
export const inc = () => ({ type: 'INC' });
export const rnd = (payload) => ({ type: 'RND', payload });
export const dec = () => ({ type: 'DEC' });