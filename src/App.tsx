import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Tv from './components/Routes/Tv'
import Search from './components/Routes/Search'
import Home from './components/Routes/Home'
import Header from './components/netflix/Header'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/tv">
            <Tv />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
