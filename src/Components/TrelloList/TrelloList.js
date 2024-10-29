import './TrelloList.css';
import ListTitle from '../ListTitle/ListTitle';
import TrelloCard from '../TrelloCard/TrelloCard';
import AddCardorList from '../AddCardorList/AddCardorList';

function TrelloList({list}) {
  //console.log("TrelloList: "+list)
  return (
    <div className="trello-list-container">
      
      <ListTitle title={list.title} listId={list.id}/>
      {list.cards.map(card => (
      <TrelloCard card={card} key={card.id}/>
      ))
      }
          
      <AddCardorList type='Card' listId={list.id}/>
      
    </div>
  );
}

export default TrelloList;