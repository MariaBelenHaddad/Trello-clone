import './AddCardorListText.css';
import { useState, useContext } from 'react';
import closeIcon from '../../Images/close_round_icon.png';
import moreIcon from '../../Images/more_horizontal_icon.png';
import ContextAPI from '../../ContextAPI.js';

function AddCardorListText({type, listId, setOpen}) {

  const [title,setTitle] = useState("") 
  const placeholder = "Enter a title for this "+type+"..." 
  const {addCard, addList} = useContext(ContextAPI)

  const handleAddCardorList = (e) => {
    //event.preventDefault();
    console.log("función handleAddCardorList");
    console.log("type"+type);
    if(title !== ""){
      if (type === "Card"){
      addCard(title, listId)
      }
      if (type === "List"){
      addList(title)
      }};
    setTitle("");
    setOpen(false);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter'){
      console.log("función handleKeyDown");
      handleAddCardorList(e);
      setOpen(false) //Al presionar 'Enter' se cierra el input      
    }
  }

  return (
    
  <form className='form-container' >

    <input className='input-container' type="text" id="inputNewCardorList" minLength={1} value={title} placeholder={placeholder} onChange={(e)=>setTitle(e.target.value)} onKeyDown={(e)=>handleKeyDown(e)}/>

    <div className='add-card-container'>
      <button className='button-add-card' type="button" listId={listId} onClick={(e)=>handleAddCardorList(e)} >Add {type}</button>
      <div className='buttons-container'>  
      <button className='close-button' onClick={()=>setOpen(false)}><img className="close-icon" src={closeIcon} alt="close button"/></button>
      <button className='more-button'><img className="more-icon" src={moreIcon} alt="more button"/></button>
      </div> 
    </div>
    
  </form>
  );
}

export default AddCardorListText;