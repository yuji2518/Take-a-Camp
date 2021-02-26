

const initialState={
  positionData:[
    [{position:1}, {position:0}, {position:0}, {position:0}, {position:0}],
    [{position:0}, {position:0}, {position:0}, {position:0}, {position:0}],
    [{position:0}, {position:0}, {position:0}, {position:0}, {position:0}],
    [{position:0}, {position:0}, {position:0}, {position:0}, {position:0}],
    [{position:0}, {position:0}, {position:0}, {position:0}, {position:2}],
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
