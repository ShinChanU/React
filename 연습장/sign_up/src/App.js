// import Header from "./components/Header";
// import DayList from './components/DayList';
// import Day from "./components/Day";
// import Header from "./components/login/Header";
// import Input from "./components/login/Input";
// import Auth from './components/login/Auth';

import { useState } from 'react';
// import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import { signIn } from "./components/login/Auth";
// import Profile from './components/login/Profile';
// import Home from "./components/login/Home";
// import About from "./components/login//About";
// import NotFound from "./components/login/NotFound";
// import AuthRoute from './components/login/AuthRoute';
import LoginForm from './components/login/LoginForm';
// import LogoutButton from './components/login/LogoutButton';

const App = () => {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  return (
    // <BrowserRouter>
    //   <header>
    //     <Link to="/">
    //       <button>Home</button>
    //     </Link>
    //     <Link to="/about">
    //       <button>About</button>
    //     </Link>
    //     <Link to="/profile">
    //       <button>Profile</button>
    //     </Link>
    //     {authenticated ? (
    //       <LogoutButton logout={logout} />
    //     ) : (
    //       <Link to="/login">
    //         <button>Login</button>
    //       </Link>
    //     )}
    //     <LoginForm />
    //   </header>
    //   <hr />
    //   <main>
    //     <Switch>
    //       <Route path="/" component={Home} />
    //       <Route path="/about" component={About} />
    //       <Route component={NotFound} />
    //       <Route path="/profile" component={Profile} />
    //       <AuthRoute
    //         authenticated={authenticated}
    //         path="/profile"
    //         render={props => <Profile user={user} {...props} />}
    //       />
    //       <Route
    //         path="/login"
    //         render={props => (
    //           <LoginForm authenticated={authenticated} login={login} {...props} />
    //         )}
    //       />
    //     </Switch>
    //   </main>
    // </BrowserRouter>
    <LoginForm />
  );
};

export default App;