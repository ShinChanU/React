import React, { useState } from 'react';
import Info from './Info';

// // import IterationSample from './IterationSample';
// import LifeCycleSample from './LifeCycleSample';
// import ErrorBoundary from './ErrorBoundary';

// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }
// // 16777215 => hex: fffff
// // 000000 ~ffffff

// class App extends Component {
//   state = {
//     color: '#000000',
//   }

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤색상</button>
//         <LifeCycleSample color={this.state.color} />
//       </div>
//     );
//   }
// };

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;