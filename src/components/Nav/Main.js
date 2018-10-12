import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
const Main = () => (
  <main>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/services' component={Services} />
      <Route component={Home}/>
    </Switch>
    </main>
)

export default Main
