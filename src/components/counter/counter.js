import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../modules/actions';

import './counter.css'

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="counter jumbotron">
      <span className="counter__tag badge badge-dark">React+Redux</span>
      <h1 className="counter__title">Counter:</h1>
      <h2 className="counter__count">{counter}</h2>
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

/**mapStateToProps получает нужные параметры из state, для того
 * что бы в внутри функции connect передать их в качестве props
 * целевому react-компоненту (в данном случае <Counter />).
 */
const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

/**mapDispatchToProps оборачивает actions в dispatch (который доступен
 * внутри функции connect), и предает их в таком виде в целевой компонент
 * в качестве props.
 * 
 */
// const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

/**Функция connect - компонент высшего порядка. Она имеет доступ
 * к store. При помощи connect компоненты ниже по иерархии могут
 * получать доступ к store, и через него к state.
 * 
 * Вместо mapDispathTOProps можно вторым аргументом передать обьект с
 * actions и функция connect сама обернет их в dispatch
 */
export default connect(mapStateToProps, /* mapDispatchToProps */ actions)(Counter);