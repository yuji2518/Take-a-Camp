import { history } from '../index.js';
import './Top.css'

function Top (){
  return(
    <div className='wrapAll'>
      <h1>Take a Camp</h1>
      <div className='wrapStartBtn'>
        <button className='startBtn' onClick={()=>{history.push('/map')}}>START</button>
      </div>
    </div>
  )
}


export default Top;
