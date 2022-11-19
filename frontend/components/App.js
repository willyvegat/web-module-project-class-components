import React from 'react';
import TodoList from "./TodoList";
import Form from "./Form";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
      ]
    }
  }

  render() {
    
    return (
      <div>
        <h2>Todos: </h2>
        <TodoList todos={this.state.todos}/>
        <Form />
        <button>Clear</button>
      </div>
    )
  }
}
