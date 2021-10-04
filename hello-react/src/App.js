import React, { Component } from 'react';
// import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
// 16777215 => hex: fffff
// 000000 ~ffffff

class App extends Component {
  state = {
    color: '#000000',
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
};

// class App extends Component {

//   render() {
//     return (
//       <div>
//         <IterationSample />
//       </div>
//     );
//   }
// };

export default App;