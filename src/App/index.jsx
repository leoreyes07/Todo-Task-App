import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoLoading } from '../TodoLoading';
import { TodosError } from '../TodosError';
import { EmptyTodo } from '../EmptyTodo';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { ChangeAlert } from '../ChangeAlert';



function App() {

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    syncTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader
        loading={loading}
      >
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
        />
        {<TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />}
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <EmptyTodo />}
        onEmptySearchresults={(searchText) => <p>There is no results for {searchText}</p>}

      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      </TodoList>


      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <ChangeAlert 
        syncTodos={syncTodos}
      />

    </React.Fragment>
  );

}

export default App;
