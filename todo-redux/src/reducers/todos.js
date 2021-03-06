
const editLastTodo = (todos,newtext) =>{
 let newTodos = [...todos]
 let ultimo =  newTodos.pop()
 ultimo.text = newtext
 return [...newTodos,ultimo]
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'REMOVE_LAST_TODO':
      return state.filter(item => item !== state[state.length - 1])
     
    case 'REMOVE_A_TODO':
      return state.filter(item => item.text.startsWith("A")=== false)
      /* return removeA(state)*/

      case 'EDIT_LAST_TODO':
      return editLastTodo(state, action.text)

    case 'REMOVE_TODO':
      return state.filter((item) => item.id !== action.todoId)

      case 'SORT_TODO':
      return [...state.sort((a, b) => a.text > b.text)]
      
    default:
      return state
  }
}

export default todos
