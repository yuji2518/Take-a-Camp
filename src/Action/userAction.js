import axios from '../axiosWrapper';
import { history } from '../index';

export const login = (username, password) => {
    return () => {
      return axios.post('session', {name: username, password: password})
      .then(() => {
        history.push("/main")
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
        history.push("/main")
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

export const redirectToMain = () => {
    return () => {
      return axios.get('session')
      .then((res) => {
        if(res.data.name){
          history.push("/main")
        }
      })
      .catch(() => {
      })
    }
}

export const logout = () => {
    return () => {
      return axios.delete("session")
      .then(() => {
        history.push("/signin")
      })
      .catch(() => {
      })
    }
}

  