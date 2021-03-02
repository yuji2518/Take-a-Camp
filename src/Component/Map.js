import React from "react"
import './Map.css';
import { connect } from 'react-redux';
import *as mapAction from '../Action/mapAction'
import *as userAction from '../Action/userAction'
import Dialog from "./Dialog";


class Map extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getStatus()
  }
  render(){
    return(
      <div>
        <p>Map</p>
        <button onClick = {() => this.props.logout()}>ログアウト</button>
        <table>
          <thead>
            {
              this.props.cells.map((rowCells, i) => (
                <tr key={i}>
                  {rowCells.map((cell, j) => {
                    return(
                      cell.id === this.props.selected_cell_id ? 
                      (<td key={cell.id} className="selected" onClick = {() => this.props.unselect()}></td>) : 
                      (<td key={cell.id} className={`team_${cell.team_id}`} onClick = {() => this.props.selectCell(cell.id)}></td>)  
                    )
                  })}
                </tr>
              ))
            }
          </thead>
        </table>
        {this.props.selected_cell_id && !this.props.hasVote ? 
        <Dialog unselect = {this.props.unselect} postVote = {this.props.postVote} selected_cell_id = {this.props.selected_cell_id} /> : "" }

        {this.props.hasVote ? (<p>投票は終了しました</p>) : ""}
      </div>
    )  
  }
}

function mapStateToProps(state){
  return{
    cells: state.map.cells,
    selected_cell_id: state.map.selected_cell_id,
    hasVote: state.user.hasVote
  }
}

function mapDispatchToProps(dispatch){
  return{
    getStatus: () => dispatch(mapAction.getStatus()),
    selectCell: (cell_id) => dispatch(mapAction.selectCell(cell_id)),
    unselect: () => dispatch(mapAction.unselect()),
    logout: () => dispatch(userAction.logout()),
    postVote: (cell_id) => dispatch(userAction.postVote(cell_id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
