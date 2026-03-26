import React from 'react';
import './TodoList.css';

function TodoList(props) {
  const renderFunc = props.children || props.render;

  return (
    <section className='TodoList_container'>

      {props.error && props.onError()}

      {props.loading && props.onLoading()}


      {!props.loading && props.totalTodos === 0 && props.onEmptyTodos()}

      {!props.loading && props.totalTodos > 0 && props.searchedTodos.length === 0 &&
        props.onEmptySearchresults(props.searchText)
      }

      {!props.loading && props.searchedTodos.map(renderFunc)}

    </section>
  );
}

export { TodoList };