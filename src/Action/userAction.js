import axios from '../axiosWrapper';
import { history } from '../index';

export const login = (username, password) => {
    return () => {
      return axios.post('session', {name: username, password: password})
      .then((res) => {
        localStorage.setItem("token", res.headers['x-authentication-token'])
        history.push("/map")
      })
      .catch((error) => {
        history.push("/signin")
        alert(error.response.data.error)
      })
    }
}

export const signup = (username, password) => {
    return () => {
      return axios.post('users', {name: username, password: password})
      .then((res) => {
        localStorage.setItem("token", res.headers['x-authentication-token'])
        history.push("/map")
        res.data.team_id === 1 ? alert("あなたは赤チームです") : alert("あなたは青チームです")    
      })
      .catch((error) => {
        history.push("/signup")
        alert(error.response.data.error[0])
      })
    }
}


export const authenticateUser = () => {
    return () => {
      return axios.get('session')
      .then((res) => {
        if(res.data.name == null){
          history.push("/signin")
        }else{
          localStorage.setItem("token", res.headers['x-authentication-token'])
        }
      })
      .catch(() => {
      })
    }
}

export const redirectToMap = () => {
    return () => {
      return axios.get('session')
      .then((res) => {
        if(res.data.name){
          history.push("/map")
        }
      })
      .catch(() => {
      })
    }
}

export const postVote = (cell_id) => {
  return (dispatch) => {
    return axios.post("votes", {cell_id: cell_id})
    .then(() => {
      dispatch(finishVote())
    }) 
    .catch((error) => {
      alert(error.response.data.error[0])
    })
  }
}

export const finishVote = () => {
  return({
    type: "FINISH_VOTE",
  })
}


  