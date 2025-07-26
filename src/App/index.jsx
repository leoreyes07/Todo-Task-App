import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';



/* localStorage.removeItem('Todos_V1'); */

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );

}

export default App;
