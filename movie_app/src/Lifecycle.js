import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello, constructor");
  }

  state = {
    count: 0
  }

  add = () => {
    this.setState((state) => ({
      count: state.count + 1
    }));
  }

  minus = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  componentDidMount() {
    console.log("Component rendered");
  }

  componentDidUpdate() {
    console.log("I just updated");
  }

  componentWillUnmount() {
    console.log("Goodbye cruel world");
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;