import './TrelloCard.css';
import { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import trashIcon from '../../Images/trash_can_delete_icon.png';

function TrelloCard({card, index}) {
  //console.log("Card title: "+card)

  const [ishover, setisHover] = useState(false);

  const handleOnMouseOver = () => {
    setisHover(true);
  };

  const handleMouseOut = () => {
    setisHover(false);
  };

  const handleClick = (e) => {
    console.log("handleClick function >> Delete card")
    //console.log(e)
    //deleteList(listId);    
    }

  return (
    <Draggable draggableId={card.id} index={index}>
      {
        (provided) => (
        
        <div className="card-container" ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}
        onMouseOver={handleOnMouseOver} 
        onMouseOut={handleMouseOut}
        >
          {/*Al aceptar props con el spread operator "...provided.draggrableProps" estamos aceptando TODOS los props */} 
          <p className="card-text">{card.title}</p>

          {ishover === true ?
          <button className='delete-button' onClick={(e)=>handleClick(e)}>
          <img className="delete-icon" src={trashIcon} alt="delete icon"/></button> : "" }   

        </div>
        )
      }
    </Draggable>
  );
}

export default TrelloCard;