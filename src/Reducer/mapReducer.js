const initialState={
  cells:[],
  selected_cell_id: null
}


export function mapReducer(state=initialState, action){
  switch(action.type){
    case 'REFLECT':
      return({
        ...state,
        cells:action.cells,
      })
    case "SELECT_CELL":
      return({
        ...state,
        selected_cell_id: action.cell_id
      })
    case "UNSELECT":
      return({
        ...state,
        selected_cell_id: null
      })
    default:
      return state;
  }
}
