import React from "react"
import './Main.css';


class Main extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getStatus()
  }
  render(){
    return(
      <div>
        <p>Main</p>
        <button onClick = {() => this.props.logout()}>ログアウト</button>
        <table>
          <thead>
            {
              this.props.cells.map((rowCells, i) => (
                <tr key={i}>
                  {rowCells.map((cell, j) => (
                    <td key={cell.id}>{cell.team_id}</td>
                  ))}
                </tr>
                )
              )
            }
          </thead>
        </table>
  
      </div>
    )  
  }
}

export default Main;
