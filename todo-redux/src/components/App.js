import React from 'react'
import AddTodo from '../containers/AddTodo'
import TodoList from '../components/TodoList'
import RemoveLastTodo from '../containers/RemoveLastTodo'
import EditLastTodo from '../containers/EditLastTodo'

const App = () => (
  <div>
    <AddTodo />
    <RemoveLastTodo />
    <EditLastTodo />
    <TodoList />
  </div>
)

export default App
