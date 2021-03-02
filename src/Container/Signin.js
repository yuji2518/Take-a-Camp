import React from 'react';
import UserForm from '../Component/UserForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import *as userAction from '../Action/userAction'



class Signin extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <p>signin</p>
        <UserForm submit = {this.props.login} redirectToMap = {this.props.redirectToMap} button = "ログイン" />
        <div>
          <Link to='/signup'>まだ登録してない？</Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(){
  return{
  }
}


function mapDispatchToProps(dispatch){
  return{
    login: (username, password) => dispatch(userAction.login(username, password)),
    redirectToMap: () => dispatch(userAction.redirectToMap())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
