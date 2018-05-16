import React from 'react'
import PropTypes from 'prop-types'

class TodoListItem extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    addItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
  }

  onClickClose = () => {
    const { index } = this.props
    this.props.removeItem(index)
  }

  onClickDone = () => {
    const { index } = this.props
    this.props.markTodoDone(index)
  }

  render () {
    const { done, value, date } = this.props.item

    var todoClass = done ? "todoItem done" : "todoItem undone"

    return (
      <li className="list-group-item ">
        <div className={todoClass}>
          <span
            className="glyphicon glyphicon-ok icon"
            aria-hidden="true"
            onClick={this.onClickDone}
          />
          <span>{value}</span>
          <span className='date'>{`Added: ${date}`}</span>
          <button type="button" className="close" onClick={this.onClickClose}>
            &times;
          </button>
        </div>
      </li>
    )
  }
}

export default TodoListItem
