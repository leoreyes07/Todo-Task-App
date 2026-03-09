import React from 'react';
import './TodoList.css';

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <section className='TodoList_container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {(!props.loading && !props.searchedTodos) && props.onEmptyTodos()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchresults(props.searchText)}

      {props.searchedTodos.map(renderFunc)}

      <ul>
        {props.children}
      </ul>
    </section>
  );
}

export { TodoList };