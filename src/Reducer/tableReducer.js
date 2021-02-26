

const initialState={
  positionData:[
    [{position:0}, {position:0}, {position:0}, {position:0}, {position:0}],
    [{position:0}, {position:0}, {position:0}, {position:0}, {position:0}],
    [{position:0}, {position:0}, {position:0}, {position:0}, {position:0}],
    [{position:0}, {position:0}, {position:0}, {position:0}, {position:0}],
    [{position:0}, {position:0}, {position:0}, {position:0}, {position:0}],
  ],
}

console.log(initialState)

export function tableReducer(state=initialState, action){
  return(
    {
      ...state,
    }
  )
}
