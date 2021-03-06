import React from 'react';
import UserForm from '../Component/UserForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import *as userAction from '../Action/userAction'



class Signin extends React.Component{
  render(){
    return(
      <div>
        <h2 className="user-form-title">ログイン</h2>
        <UserForm submit = {this.props.login} redirectToMap = {this.props.redirectToMap} button = "ログイン" />
        <div className="user-form-link">
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
