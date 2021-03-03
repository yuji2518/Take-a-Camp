import { Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Map from '../Container/Map';
import Top from './Top';
import Signin from '../Container/Signin';
import Signup from '../Container/Signup';
import { history } from '../index.js';
import "./App.css"


class App extends React.Component{
  render(){
    return(
      <Router history={history}>
        <Switch>
          <Route exact path='/' render={()=><Top {...this.props}/>}/>
          <Route exact path='/signin' render={()=><Signin {...this.props}/>}/>
          <Route exact path='/signup' render={()=><Signup {...this.props}/>}/>
          <Route exact path='/map' render={()=><Map {...this.props}/>}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
