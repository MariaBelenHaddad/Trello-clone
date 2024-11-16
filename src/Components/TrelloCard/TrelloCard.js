import './TrelloCard.css';
import { Draggable } from 'react-beautiful-dnd';

function TrelloCard({card, index}) {
  //console.log("Card title: "+card)
  return (
    <Draggable draggableId={card.id} index={index}>
      {
        (provided) => (
        <div className="card-container" ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
          {/*Al aceptar props con el spread operator "...provided.draggrableProps" estamos aceptando TODOS los props */} 
          <p className="card-text">
            {card.title}
          </p>     
        </div>
        )
      }
    </Draggable>
  );
}

export default TrelloCard;