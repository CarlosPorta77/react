import React, {Component} from 'react'
import { connect } from 'react-redux'
import { sortTodo } from '../actions'

class SortTodo extends Component {

    render() {
      return (
        <div>
          <button onClick={() => this.props.sortTodo()}>
            Sort  Todo
          </button>
        </div>
      )
  }

  
}

const mapDispatchToProps = (dispatch) => ({
  sortTodo: () => dispatch(sortTodo())
})

export default connect(
  null,
  mapDispatchToProps
)(SortTodo)
