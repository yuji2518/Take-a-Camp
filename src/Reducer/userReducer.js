const initialState={
    hasVote: false
  }
  
  
  export function userReducer(state=initialState, action){
    switch(action.type){
      case 'FINISH_VOTE':
        return({
          ...state,
          hasVote: true
        })
      default:
        return state;
    }
  }
  