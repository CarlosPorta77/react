import React from 'react'
import AddTodo from '../containers/AddTodo'
import TodoList from '../components/TodoList'
import RemoveLastTodo from '../containers/RemoveLastTodo'
import EditLastTodo from '../containers/EditLastTodo'
import RemoveATodo from '../containers/RemoveATodo'
import SortTodo from '../containers/SortTodo'
const App = () => (
  <div>
    <AddTodo />
    <RemoveLastTodo />
    <EditLastTodo />
    <RemoveATodo />
    <SortTodo />
    <TodoList />
  </div>
)

export default App
