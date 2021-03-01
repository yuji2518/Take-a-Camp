import React from 'react';
import UserForm from './UserForm';
import { Link } from 'react-router-dom';


class Signin extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <p>signin</p>
        <UserForm submit = {this.props.login} redirectToMain = {this.props.redirectToMain} button = "ログイン" />
        <div>
          <Link to='/signup'>まだ登録してない？</Link>
        </div>
      </div>
    )
  }
}

export default Signin