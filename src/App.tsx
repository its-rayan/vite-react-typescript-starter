import { Route, Switch } from "wouter";

function App() {
  return (
    <>
      {/* 
      Routes below are matched exclusively -
      the first matched route gets rendered
    */}
      <Switch>
        <Route path="/">
          <h1>Welcome to the homepage!</h1>
        </Route>

        <Route path="/users/:name">
          {(params) => <>Hello, {params.name}!</>}
        </Route>

        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>
    </>
  );
}

export default App;
