import './App.css'

import Home from '../Home'

import TeamMatches from '../TeamMatches'

import NotFound from '../NotFound'

import {Switch, Route} from 'react-router-dom'

const App = () => {
  ;<Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/team-matches/:id" component={TeamMatches} />
    <Route component={NotFound} />
  </Switch>
}

export default App
