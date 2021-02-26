import './Main.css';



function Main ({positionData}){
  console.log(positionData.length)
  return(
    <div>
      <p>Main</p>
      <table>
        <thead>
          {
            positionData.map(function(rowCells, i){
              return(
                <tr key={i}>
                {
                  positionData[i].map(function(cell, j){
                    if(cell.position===1){
                      return(
                        <td key={i*10+j} style={{background:'#2D9CDB'}}>({i},{j})</td>
                      )}else if (cell.position===2) {
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
