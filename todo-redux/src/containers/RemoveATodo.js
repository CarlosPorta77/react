import React, {Component} from 'react'
import { connect } from 'react-redux'
import { removeATodo } from '../actions'

class RemoveATodo extends Component {

    render() {
      return (
        <div>
          <button onClick={() => this.props.removeATodo()}>
            Remove A started Todo
          </button>
        </div>
      )
  }

  
}

const mapDispatchToProps = (dispatch) => ({
  removeATodo: () => dispatch(removeATodo())
})

export default connect(
  null,
  mapDispatchToProps
)(RemoveATodo)
