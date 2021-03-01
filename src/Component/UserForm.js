import './UserForm.css';
import React from 'react';


class UserForm extends React.Component{
  constructor(props){
    super(props);
    this.state={name:'', password:''}

    this.onChangeName=this.onChangeName.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
  }
  componentDidMount(){
    this.props.redirectToMain()
  }
  onChangeName(event){
    this.setState({name:event.target.value})
  }
  onChangePassword(event){
    this.setState({password:event.target.value})
  }
  render(){
    return(
      <div>
        <div>
          <input type='text' placeholder='name' onChange={(event)=>this.onChangeName(event)}/>
        </div>
        <div>
          <input type='text' placeholder='password' onChange={(event)=>this.onChangePassword(event)}/>
        </div>
        <button onClick = {() => this.props.submit(this.state.name, this.state.password)}>{this.props.button}</button>
      </div>
    )
  }

}


export default UserForm;
