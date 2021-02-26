import './Main.css';



function Main ({cells}){
  console.log(cells);
  return(
    <div>
      <p>Main</p>
      <table>
        <thead>
          {
            cells.map(function(rowCells, i){
              return(
                <tr key={i}>
                {
                  cells[i].map(function(cell, j){
                    if(cell.status===1){
                      return(
                        <td key={i*10+j} style={{background:'#2D9CDB'}}>({i},{j})</td>
                      )}else if (cell.status===2) {
                        return(
                          <td key={i*10+j} style={{background:'#DB2D2D'}}>({i},{j})</td>
                        )}else{
                          return(
                            <td key={i*10+j}>({i},{j})</td>
                          )
                        }
                      }
                    )
                  }
                </tr>
              )
            })
          }
        </thead>
      </table>

    </div>
  )
}


export default Main;
