import axios from '../axiosWrapper';
import { history } from '../index';
import { finishVote } from "./userAction"


export const reflectStatus = (cells, points) => {
  return({
    type:'REFLECT',
    cells,
    points
  })
}

export const selectCell = (cell_id) => {
  return({
    type: "SELECT_CELL",
    cell_id: cell_id
  })
}

export const unselect = () => {
  return({
    type: "UNSELECT",
  })
}

export const getStatus = () => {
  return(dispatch)=>{
    return axios.get('cells')
    .then((res) => {
      dispatch(reflectStatus(res.data.cells, res.data.points));
      if(res.data.voted_cell){
        dispatch(finishVote())
      }
    })
    .catch(() => {
      history.push("/signin")
      }
    )
  }
}