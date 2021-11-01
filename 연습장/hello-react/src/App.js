import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import CMInput from './pages/components/CMInput';
import CMButton from './pages/components/CMButton';

function App() {
  const container = {
    backgroundColor: 'antiquewhite',
    width: '80%',
    margin: '0 auto',
  };

  return (
    <div style={container}>
      <LoginPage />
      <hr />
      <JoinPage />
      <hr />
    </div>
  );
}

export default App;
