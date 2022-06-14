import { Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path = '/'>
          <div className="App">Hii!!</div>
        </Route>
      </Switch>
    </>
  );
};

export default App;
