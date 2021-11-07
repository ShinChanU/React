// import { useState } from 'react';
// import { signIn } from "./components/login/Auth";
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from "./components/login/Home";
import About from "./components/login/About";
import LoginForm from './components/login/LoginForm';
import Profiles from './components/login/Profiles';
import HistorySample from './components/login/HistorySample';

const App = () => {
  // const [user, setUser] = useState(null);
  // const authenticated = user != null;

  // const login = ({ email, password }) => setUser(signIn({ email, password }));
  // const logout = () => setUser(null);

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/Profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={['/about', '/info']} component={About} />
        <Route path="/login" component={LoginForm} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          // path를 따로 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;