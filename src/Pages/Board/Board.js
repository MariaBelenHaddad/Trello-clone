import './Board.css';
import { useState } from 'react';
import TrelloList from '../../Components/TrelloList/TrelloList';
import AddCardorList from '../../Components/AddCardorList/AddCardorList';
import mockData from "../../Data/mockdata.js"
import ContextAPI from "../../ContextAPI.js";

function Board() {

  const [data, setData] = useState(mockData);
  //console.log(data)

  const updateListTitle = (updatedTitle, listId) => {
    console.log("Actualizo el título de la lista en data: ")
    const list = data.lists[listId]
    list.title = updatedTitle;
    setData({
      ...data,
      lists: {
        ...data.lists, 
        [listId] : list
      }
    })
    console.log(data)
  }

  const addCard = (title, listId) => {
    //const productId = crypto.randomUUID();
  }

  const addList = (title) => {}
  
  return (
    <ContextAPI.Provider value={{updateListTitle, addCard, addList}}> 
    {/* Con esta línea exportamos a través de ContextAPI la función updateLIstTitle para usarla en cualquier componente */}
    <div className="board">
      <nav><p className='nav-board'>My Board</p></nav>

      <div className='lists-container'>
       { data.listIds.map(listId => {
          const list = data.lists[listId]
          return <TrelloList list={list} key={listId}/>
          //Pasamos toda la información de la lista a través de const=list
        })
       }
        
      <AddCardorList type='List'/>
      </div>       
      
    </div>
    </ContextAPI.Provider>
  );
}

export default Board;