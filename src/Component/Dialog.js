import React from "react"
import "./Dialog.css"

const Dialog = (props) => {
  return(
    <div className="dialog">
      <span className="dialog-cell">■</span>
      <span>このマスを選びますか？</span>
      <button onClick = {() => props.postVote(props.selected_cell_id)}>YES</button>
      <button onClick = {() => props.unselect()}>NO</button>
    </div>
  )
}

export default Dialog