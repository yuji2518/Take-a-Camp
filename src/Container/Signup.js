import React from 'react';
import UserForm from '../Component/UserForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import *as userAction from '../Action/userAction'



class Signup extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <p>signup</p>
        <UserForm submit = {this.props.signup} redirectToMap = {this.props.redirectToMap} button = "登録" />
        <div>
          <Link to='/signin'>もう登録した？</Link>
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
    signup: (username, password) => dispatch(userAction.signup(username, password)),
    redirectToMap: () => dispatch(userAction.redirectToMap())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
