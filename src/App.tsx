import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Tv from "./components/Routes/Tv";
import Search from "./components/Routes/Search";
import Home from "./components/Routes/Home";
import Header from "./components/Netflix/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/tv" component={Tv}>
            <Tv />
          </Route>
          <Route path="/search" component={Search}>
            <Search />
          </Route>
          <Route path="/" exact component={Home}>
            <Home />
          </Route>
          {/**
           * 위의 Route가 전부 false 일 경우 Redirect로 이동한다.
           * @from 뒤의 어떤 파라미터가 붙었을때
           * @to 로 이동 한다.
           */}
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
