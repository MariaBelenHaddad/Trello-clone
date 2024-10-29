import AddCardorListText from '../AddCardorListText/AddCardorListText';
import './AddCardorList.css';
import { useState } from 'react';

function AddCardorList({type, listId}) {

  const [open,setOpen] = useState(false)

  return (
    <div className='add-section'> 

      {open === false ? <div className="add-card-container-closed"><button className='add-card-title-closed' onClick={()=>setOpen(true)}>+ Add {type}</button></div> : <AddCardorListText type={type} listId={listId} setOpen={setOpen} />}
        
    </div>
  );
}

export default AddCardorList;