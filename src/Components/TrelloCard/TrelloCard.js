import './TrelloCard.css';
import { useState, useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import trashIcon from '../../Images/trash_can_delete_icon.png';
import ContextAPI from '../../ContextAPI.js';

function TrelloCard({card, index, listId}) {

  const [ishover, setisHover] = useState(false);
  const {deleteCard} = useContext(ContextAPI)

  const handleOnMouseOver = () => {
    setisHover(true);
  };

  const handleMouseOut = () => {
    setisHover(false);
  };

  const handleClick = (e) => {
    const cardId = card.id
    //console.log("CardId: " + cardId)
    deleteCard(cardId, listId, index);    
  };

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