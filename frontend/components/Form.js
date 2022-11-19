import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  }
  handleSubmit = (e) => {
    // console.log("submit task");
    e.preventDefault();
    this.props.handleAdd(this.state.input);
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }

  render() {
    // console.log(this.state.input)
    return (
      <>
        <form>
          <input onChange={this.handleChange} placeholder="Add Todo"/>
          <button onClick={this.handleSubmit}>Add</button>
        </form>
      </>
    );
  }
}
