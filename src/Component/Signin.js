import './Signin.css';
import React from 'react';
import axios from '../axiosWrapper';
import { Link } from 'react-router-dom';
import {history} from '../index';



class Signin extends React.Component{
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
        <p>signin</p>
        <div>
          <input type='text' placeholder='name' onChange={(event)=>this.onChangeName(event)}/>
        </div>
        <div>
          <input type='text' placeholder='password' onChange={(event)=>this.onChangePassword(event)}/>
        </div>
        <button
        onClick={()=>{
            axios.post('session', {
              name:this.state.name,
              password:this.state.password
            })
            .then(()=>{
              this.props.getStatus()
            })
            .catch(()=>{
              history.push('/')
            })
          }}>
          ログイン
          </button>
          <button
          onClick={()=>{
            axios.delete('session')
          }}>ログアウト</button>
        <div>
          <Link to='/Signup'>まだ登録してない？</Link>
        </div>
      </div>
    )
  }

}


export default Signin;
