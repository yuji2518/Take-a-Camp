import { Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Main from '../Component/Main';
import Top from '../Component/Top';
import { connect } from 'react-redux';
import { history } from '../index.js';


class App extends React.Component{
  render(){
    return(
      <Router history={history}>
        <Switch>
          <Route exact path='/' render={()=><Top {...this.props}/>}/>
          <Route exact path='/Main' render={()=><Main {...this.props}/>}/>
        </Switch>
      </Router>
    )
  }
}

function mapStateToProps(state){
  return{
    positionData:state.table.positionData,
  }
}

function mapDispatchToProps(dispatch){
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
