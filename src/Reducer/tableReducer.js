

const initialState={
  cells:[],
}


export function tableReducer(state=initialState, action){
  switch(action.type){
    case 'REFLECT':
      return({
        ...state,
        cells:action.cells,
      })
    default:
      return state;
  }
}
