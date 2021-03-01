import axios from '../axiosWrapper';
import { history } from '../index';


export const reflectStatus = (cells) => {
  return({
    type:'REFLECT',
    cells,
  })
}

export const getStatus = () => {
  return(dispatch)=>{
    return axios.get('cells')
    .then((response) => {
      let cells=response.data.cells;
      dispatch(reflectStatus(cells));
    })
    .catch(() => {
      history.push("/signin")
      }
    )
  }
}
