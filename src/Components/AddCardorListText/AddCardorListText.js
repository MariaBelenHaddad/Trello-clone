import './AddCardorListText.css';
import { useState, useContext } from 'react';
import closeIcon from '../../Images/close_round_icon.png'
import moreIcon from '../../Images/more_horizontal_icon.png'
import ContextAPI from '../../ContextAPI.js';

function AddCardorListText({type, listId, setOpen}) {

  const [title,setTitle] = useState("") 
  const placeholder = "Enter a title for this "+type+"..." 
  const {addCard, addList} = useContext(ContextAPI)

  const handleAddCardorList = () => {
    if (type === "card"){
      addCard(title, listId)
    }
    if (type === "list"){
      addList(title)
    }
    setTitle("")
    setOpen(false)
  }

  return (
    
  <form className='form-container' >

    <input className='input-container' type="text" value={title} placeholder={placeholder} onChange={e=>setTitle(e.target.value)} onBlur={()=>setOpen(false)}/>

    <div className='add-card-container'>
      <button type="submit" className='button-add-card' listId={listId} onClick={()=>handleAddCardorList()} >Add {type}</button>
      <div className='buttons-container'>  
      <button className='close-button' onClick={()=>setOpen(false)}><img className="close-icon" src={closeIcon} alt="close button"/></button>
      <button className='more-button'><img className="more-icon" src={moreIcon} alt="more button"/></button>
      </div> 
    </div>
    
  </form>
  );
}

export default AddCardorListText;