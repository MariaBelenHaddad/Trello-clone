import './TrelloCard.css';

function TrelloCard({card}) {
  //console.log("Card title: "+card)
  return (
    <div className="card-container"> 
      <p className="card-text">
        {card.title}
      </p>     
    </div>
  );
}

export default TrelloCard;