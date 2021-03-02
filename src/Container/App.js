import { Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Map from '../Component/Map';
import Top from '../Component/Top';
import Signin from '../Component/Signin';
import Signup from '../Component/Signup';
import { history } from '../index.js';


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
