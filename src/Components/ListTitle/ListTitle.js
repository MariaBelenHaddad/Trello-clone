import './ListTitle.css';
import { Fragment, useContext, useState } from 'react';
import moreIcon from '../../Images/more_horizontal_icon.png';
import ContextAPI from '../../ContextAPI.js';

function ListTitle({title, listId}) {

  const [open, setOpen] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const {updateListTitle} = useContext(ContextAPI)

  const handleBlur = () => {
    //actualizar new Title
    updateListTitle(newTitle, listId); //Actualiza el título en nuestra variable data  
    setOpen(false)
  }

   const handleKeyDown = (e) => {
    if (e.key === 'Enter'){
      updateListTitle(newTitle, listId);
      setOpen(false) //Al presionar 'Enter' se cierra el input      
    }
  }

  return (
    <Fragment>  

    {open === false ? 
    <form className="list-title-container">
    <p className="list-title" onClick={()=>setOpen(true)}>{newTitle}</p>
    <button className='more-button'><img className="more-icon" src={moreIcon} alt="more icon"/></button>
    </form>
    : 
    <form className="list-title-container">
    <input className="list-title" type="text" placeholder={newTitle} onChange={(e)=>setNewTitle(e.target.value)} onBlur={()=>handleBlur()} onKeyDown={(e)=>handleKeyDown(e)} />
    <button className='more-button'>
    <img className="more-icon" src={moreIcon} alt="more icon"/></button></form>
    }
        
    </Fragment>
  );
}

export default ListTitle;