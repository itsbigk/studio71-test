import React from 'react'
import PropTypes from 'prop-types'

class TodoForm extends React.Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.refs.todoInput.focus()
  }
  onSubmit = event => {
    event.preventDefault()
    const newItemValue = this.refs.todoInput.value

    if (newItemValue) {
      this.props.addItem(newItemValue)
      this.refs.form.reset()
    }
  }
  render () {
    return (
      <form ref="form" id="todoForm" onSubmit={this.onSubmit} className="form-inline">
        <input
          type="text"
          ref="todoInput"
          id="itemName"
          className="form-control"
          placeholder="add a new todo..."
        />
        <button type="submit" className="btn btn-default">
          Add
        </button>
      </form>
    )
  }
}

export default TodoForm
