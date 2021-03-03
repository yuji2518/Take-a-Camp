import axios from '../axiosWrapper';
import { history } from '../index';

export const login = (username, password) => {
    return () => {
      return axios.post('session', {name: username, password: password})
      .then(() => {
        history.push("/map")
      })
      .catch(() => {
        history.push("/signin")
      })
    }
}

export const signup = (username, password) => {
    return () => {
      return axios.post('users', {name: username, password: password})
      .then(() => {
        history.push("/map")
      })
      .catch(() => {
        history.push("/signup")
      })
    }
}


export const authenticateUser = () => {
    return () => {
      return axios.get('session')
      .then((res) => {
        if(res.data.name == null){
          history.push("/signin")
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

export const logout = () => {
    return (dispatch) => {
      return axios.delete("session")
      .then(() => {
        history.push("/signin")
        dispatch(successLogout())
      })
      .catch(() => {
      })
    }
}

export const successLogout = () => {
  return({
    type: "SUCCESS_LOGOUT"
  })
}

export const postVote = (cell_id) => {
  return (dispatch) => {
    return axios.post("votes", {cell_id: cell_id})
    .then(() => {
      dispatch(finishVote())
    }) 
    .catch(() => {
    })
  }
}

export const finishVote = () => {
  return({
    type: "FINISH_VOTE",
  })
}


  