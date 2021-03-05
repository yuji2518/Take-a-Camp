import { history } from '../index.js';
import './Top.css'
import Rule from './Rule';

function Top (){
  return(
    <div className='wrapAll'>
      <div className='logo'>
        <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="" />
      </div>
      <Rule />
      <div className='wrapStartBtn'>
        <button className='startBtn' onClick={()=>{history.push('/map')}}>START</button>
      </div>
    </div>
  )
}


export default Top;
