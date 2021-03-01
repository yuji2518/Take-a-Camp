import React from 'react';
import UserForm from './UserForm';
import { Link } from 'react-router-dom';


class Signup extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <p>signup</p>
        <UserForm submit = {this.props.signup} redirectToMain = {this.props.redirectToMain} button = "登録" />
        <div>
          <Link to='/signin'>もう登録した？</Link>
        </div>
      </div>
    )
  }
}

export default Signup