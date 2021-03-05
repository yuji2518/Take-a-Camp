import Rule from './Rule';
import './Modal.css';


export default function Modal ({isOpen, closeModal}) {
  if(isOpen){
    return(
      <div className='overlay' onClick={() => {closeModal()}}>
        <div>
          <Rule />
        </div>
      </div>
    )
  }else{
    return null;
  }
}
