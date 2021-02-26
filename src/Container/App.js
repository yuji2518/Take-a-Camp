import { Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Main from '../Component/Main';
import Top from '../Component/Top';
import Signin from '../Component/Signin';
import Signup from '../Component/Signup';
import { connect } from 'react-redux';
import { history } from '../index.js';
import *as action from '../Action/tableAction'


class App extends React.Component{
  render(){
    return(
      <Router history={history}>
        <Switch>
          <Route exact path='/' render={()=><Top {...this.props}/>}/>
          <Route exact path='/Signin' render={()=><Signin {...this.props}/>}/>
          <Route exact path='/Signup' render={()=><Signup {...this.props}/>}/>
          <Route exact path='/Main' render={()=><Main {...this.props}/>}/>
        </Switch>
      </Router>
    )
  }
}

function mapStateToProps(state){
  return{
    cells:state.table.cells,
  }
}

function mapDispatchToProps(dispatch){
  return{
    getStatus(){
      dispatch(action.getStatus());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
