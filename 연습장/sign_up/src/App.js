import Header from "./components/Header";
import DayList from './components/DayList';
import Day from "./components/Day";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;