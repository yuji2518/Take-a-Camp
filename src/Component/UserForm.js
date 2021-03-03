import './UserForm.css';
import React from 'react';


class UserForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '', 
      password: ''
    }
    this.onChangeName=this.onChangeName.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
  }
  componentDidMount(){
    this.props.redirectToMap()
  }
  onChangeName(event){
    this.setState({name:event.target.value})
  }
  onChangePassword(event){
    this.setState({password:event.target.value})
  }
  render(){
    return(
      <div className="user-form">
        <input type='text' placeholder='ニックネーム' onChange={(event)=>this.onChangeName(event)}/>
        <input type='text' placeholder='パスワード（英数字6文字以上20文字以内）' onChange={(event)=>this.onChangePassword(event)}/>
        <button onClick = {() => this.props.submit(this.state.name, this.state.password)}>{this.props.button}</button>
      </div>
    )
  }

}


export default UserForm;
