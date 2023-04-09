import {Switch, Route} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Header from './components/Header'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={LoginForm} />
    <Route component={NotFound} />
  </Switch>
)

export default App
