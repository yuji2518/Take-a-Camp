import { Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Main from '../Component/Main';
import Top from '../Component/Top';
import Signin from '../Component/Signin';
import Signup from '../Component/Signup';
import { connect } from 'react-redux';
import { history } from '../index.js';
import *as tableAction from '../Action/tableAction'
import *as userAction from '../Action/userAction'


class App extends React.Component{
  render(){
    return(
      <Router history={history}>
        <Switch>
          <Route exact path='/' render={()=><Top {...this.props}/>}/>
          <Route exact path='/signin' render={()=><Signin {...this.props}/>}/>
          <Route exact path='/signup' render={()=><Signup {...this.props}/>}/>
          <Route exact path='/main' render={()=><Main {...this.props}/>}/>
        </Switch>
      </Router>
    )
  }
}

function mapStateToProps(state){
  return{
    cells: state.table.cells,
  }
}

function mapDispatchToProps(dispatch){
  return{
    getStatus: () => dispatch(tableAction.getStatus()),
    login: (username, password) => dispatch(userAction.login(username, password)),
    signup: (username, password) => dispatch(userAction.signup(username, password)),
    authenticateUser: () => dispatch(userAction.authenticateUser()),
    logout: () => dispatch(userAction.logout()),
    redirectToMain: () => dispatch(userAction.redirectToMain())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
