import React, {Component} from 'react'
import { connect } from 'react-redux'
import { editLastTodo } from '../actions'

class EditLastTodo extends Component {

 input;

  onSubmit = event => {
    event.preventDefault()
      if (!this.input.value.trim()) {
        return
      }
      this.props.editLastTodo(this.input.value)
      this.input.value = ''
      this.input.focus()
  }
    render() {
      return (
 <div>
          <form onSubmit={this.onSubmit}>
            <input ref={node => this.input = node} />
            <button type="submit">
              Edit Last Todo
            </button>
          </form>
        </div>
      )
  }

  
}

const mapDispatchToProps = (dispatch) => ({
  editLastTodo: (text) => dispatch(editLastTodo(text))
})

export default connect(
  null,
  mapDispatchToProps
)(EditLastTodo)
