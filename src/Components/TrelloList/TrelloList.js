import './TrelloList.css';
import ListTitle from '../ListTitle/ListTitle';
import TrelloCard from '../TrelloCard/TrelloCard';
import AddCardorList from '../AddCardorList/AddCardorList';
import { Draggable, Droppable } from 'react-beautiful-dnd';

function TrelloList({list, index}) {
  //console.log("TrelloList: "+list)
  return (
    <Draggable draggableId={list.id} index={index}>
    {
      (provided) => (
        <div className="trello-list-container" {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
        <ListTitle title={list.title} listId={list.id}/>

        <Droppable droppableId={list.id}>
          {
            (provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} > {/* Debemos incluir la lógica dentro de un div*/}
              {list.cards.map((card, index) => (
                <TrelloCard card={card} key={card.id} index={index}/> 
                /*Al las TrelloCards debemos pasarle un index para que pueda funcionar el draggable */
                ))
              }
              {provided.placeholder}
              </div> 
            )
          }
        </Droppable>    

        <AddCardorList type='Card' listId={list.id}/>
        </div>
      )
    }
    </Draggable>
  );
}

export default TrelloList;