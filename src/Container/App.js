import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Main from '../Component/Main';


class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/' render={()=><Main/>}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
