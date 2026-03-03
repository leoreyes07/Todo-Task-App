import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoLoading } from '../TodoLoading';
import { TodosError } from '../TodosError';
import { EmptyTodo } from '../EmptyTodo';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import React from 'react';


function AppUI() {
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
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <TodoHeader>
                <TodoCounter
                    completedTodos={completedTodos}
                    totalTodos={totalTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>



            <TodoList>
                {loading && (
                    <>
                        <TodoLoading />
                    </>
                )}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmptyTodo />}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </React.Fragment>
    );
}

export { AppUI };