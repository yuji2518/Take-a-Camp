import './Signup.css';
import React from 'react';
import axios from '../axiosWrapper';



class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state={name:'', password:''}

    this.onChangeName=this.onChangeName.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
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
        <p>signup</p>
        <div>
          <input type='text' placeholder='name' onChange={(event)=>this.onChangeName(event)}/>
        </div>
        <div>
          <input type='text' placeholder='password' onChange={(event)=>this.onChangePassword(event)}/>
        </div>
        <button
        onClick={()=>{
          axios.post('users', {
            name:this.state.name,
            password:this.state.password})}}>
          登録
          </button>
      </div>
    )
  }

}


export default Signup;
