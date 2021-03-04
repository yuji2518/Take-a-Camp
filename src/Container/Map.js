import React from "react"
import '../Component/Map.css';
import { connect } from 'react-redux';
import *as mapAction from '../Action/mapAction'
import *as userAction from '../Action/userAction'
import Dialog from "../Component/Dialog";


class Map extends React.Component{
  componentDidMount(){
    this.props.getStatus()
  }
  render(){
    return(
      <div className="map">
        <div className="team-status">
          <div className="team-1-status"><span>●</span>{this.props.points[0]}pt</div>
          <div className="team-2-status"><span>●</span>{this.props.points[1]}pt</div>
        </div>
        <table>
          <tbody>
            {
              this.props.cells.map((rowCells, i) => (
                <tr key={i}>
                  {rowCells.map((cell, j) => {
                    switch (cell.point) {
                      case 1:
                        return(
                          cell.id === this.props.selected_cell_id ? 
                          (<td key={cell.id} className="selected" onClick = {() => this.props.unselect()}></td>) : 
                          (<td key={cell.id} className={`team_${cell.team_id}`} onClick = {() => this.props.selectCell(cell.id)}></td>)  
                        ) 
                      case 2:
                        return(
                          cell.id === this.props.selected_cell_id ? 
                          (<td key={cell.id} className="selected" onClick = {() => this.props.unselect()}>
                            <img src={`${process.env.PUBLIC_URL}/flag.png`} alt="" />
                          </td>) : 
                          (<td key={cell.id} className={`team_${cell.team_id}`} onClick = {() => this.props.selectCell(cell.id)}>
                            <img src={`${process.env.PUBLIC_URL}/flag.png`} alt="" />
                          </td>)  
                        ) 
                      case 3:
                        return(
                          cell.id === this.props.selected_cell_id ? 
                          (<td key={cell.id} className="selected" onClick = {() => this.props.unselect()}>
                             <img src={`${process.env.PUBLIC_URL}/flag.png`} alt="" />
                           </td>) : 
                          (<td key={cell.id} className={`team_${cell.team_id}`} onClick = {() => this.props.selectCell(cell.id)}>
                             <img src={`${process.env.PUBLIC_URL}/flag.png`} alt="" />
                           </td>)  

                        )                  
                      default:
                        return(
                          cell.id === this.props.selected_cell_id ? 
                          (<td key={cell.id} className="selected" onClick = {() => this.props.unselect()}></td>) : 
                          (<td key={cell.id} className={`team_${cell.team_id}`} onClick = {() => this.props.selectCell(cell.id)}></td>)  
                        )                  
                    }
                  })}
                </tr>
              ))
            }
          </tbody>
        </table>
        {this.props.selected_cell_id && !this.props.hasVote ? 
        <Dialog unselect = {this.props.unselect} postVote = {this.props.postVote} selected_cell_id = {this.props.selected_cell_id} /> : "" }

        {this.props.hasVote ? (<p className="finish-vote">投票は終了しました</p>) : ""}

        <button className="logout-button" onClick = {() => this.props.logout()}>
          <img src={`${process.env.PUBLIC_URL}/logout.png`} alt="" />
        </button>
      </div>
    )  
  }
}

function mapStateToProps(state){
  return{
    cells: state.map.cells,
    selected_cell_id: state.map.selected_cell_id,
    hasVote: state.user.hasVote,
    points: state.map.points
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
