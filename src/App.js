import React from "react"
import TodoListItem from "./TodoListItem"
import TodoForm from "./TodoForm"
import Timer from "./Timer"
import moment from "moment"
import "./App.css"

class TodoApp extends React.Component {
  state = {
    todoItems: [],
    showTimer: false
  }

  addItem = value => {
    const { todoItems } = this.state
    const newItem = {
      value,
      date: moment().format("ll"),
      done: false
    }
    this.setState({ todoItems: todoItems.concat(newItem) })
  }

  removeItem = itemIndex => {
    this.setState((prevState, props) => {
      const todoItems = prevState.todoItems.filter((item, index) => index !== itemIndex)

      return {
        todoItems
      }
    })
  }

  markTodoDone = index => {
    this.setState((prevState, props) => {
      const todoItems = [...prevState.todoItems]

      todoItems[index].done = !prevState.todoItems[index].done

      return {
        todoItems
      }
    })
  }

  showTimer = () => {
    this.setState({
      showTimer: !this.state.showTimer
    })
  }

  render () {
    const { todoItems } = this.state
    const items = todoItems.map((item, index) => {
      return (
        <TodoListItem
          key={index}
          index={index}
          item={item}
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
        />
      )
    })

    return (
      <div id="main">
        <h1>Todo list</h1>
        <button onClick={this.showTimer}>
          Toggle Timer
        </button>
        {this.state.showTimer && <Timer />}

        <ul className="list-group"> {items} </ul>

        <TodoForm addItem={this.addItem} />
      </div>
    )
  }
}

export default TodoApp
