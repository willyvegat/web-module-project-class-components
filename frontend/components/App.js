import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Todos: </h2>
        <ul>
          <li>Take out trash</li>
          <li>Do laundry</li>
          <li>Read a chapter</li>
        </ul>

        <form>
          <input/>
          <button>Add</button>
        </form>

        <button>Clear</button>
      </div>
    )
  }
}
