import { history } from '../index.js';


function Top (){
  return(
    <div>
      <p>Top</p>
      <button onClick={()=>{history.push('/Signin')}}>Next</button>
    </div>
  )
}


export default Top;
