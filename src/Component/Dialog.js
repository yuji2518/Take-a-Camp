import React from "react"

const Dialog = (props) => {
  return(
    <div>
      <span>このマスを選びますか？</span>
      <button onClick = {() => props.postVote(props.selected_cell_id)}>YES</button>
      <button onClick = {() => props.unselect()}>NO</button>
    </div>
  )
}

export default Dialog