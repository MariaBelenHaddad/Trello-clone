import './Board.css';
import { useState } from 'react';
import uuid from 'react-uuid';
import TrelloList from '../../Components/TrelloList/TrelloList';
import AddCardorList from '../../Components/AddCardorList/AddCardorList';
import mockData from "../../Data/mockdata.js"
import ContextAPI from "../../ContextAPI.js";
//Install: npm install react-beautiful-dnd --save
import { DragDropContext, Droppable } from 'react-beautiful-dnd'; //Use package for drag & drop

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

  const addCard = (newTitle, listId) => {
    //npm i react-uuid (instalar paquete para crear uuid)
    //const productId = crypto.randomUUID(); alternativa con crypto package
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title: newTitle // cuando la llave y el valor tienen el mismo nombre solo hace falta escribirlo una vez
    }
    //añadir el newCard al array de cards que tiene la lista
    const list = data.lists[listId]
    list.cards = [...list.cards, newCard]
    //actualizar data
    setData({
      ...data, 
      lists: {
        ...data.lists,
        [listId]:list

      }
    })
  }

  const addList = (title) => {
    //generar un nuevo listId
    const newListId = uuid();
    setData({
      listIds : [...data.listIds, newListId ],
      lists:{
        ...data.lists,
        [newListId]:{id:newListId, title: title, cards:[]}} // si tittle : title no hace falta escribirlo, con escribirlo una vez se entiende
    })
  }

  const onDragEnd = (result) => {
    //console.log(result)
    //result es un objeto que me trae toda la información sobre drag & drop events
    const {destination, source, draggableId, type} = result
    console.log("source: ", source)
    console.log("destination: ", destination)
    console.log("draggableId: ", draggableId)
    console.log("type: ", type)

    const {destination : {droppableId : destDroppableId}, source : {droppableId : sourceDroppableId}} = result
    //selecciono el droppableId de destination y le cambio el nombre para destDroppableId
    console.table([
      {
        destDroppableId,
        sourceDroppableId,
        draggableId
      }
    ])

    const sourceIndex = source.index;
    //console.log("source Index: ",sourceIndex);
    const destinationIndex = destination.index;
    console.table([
      {
        destinationIndex,
        sourceIndex, 
        type
      }
    ])

    if(!destination){
      return; //Si no hay destination (se quiere hacer un drop donde no hay nada, retornamos nada)
    }

    if(type === "list"){
      const newListIds = data.listIds
      newListIds.splice(sourceIndex, 1);
      newListIds.splice(destinationIndex, 0, draggableId)
      return;
    };
    
    const sourceList = data.lists[sourceDroppableId]
    const destinationList = data.lists[destDroppableId]
    const draggingCard = sourceList.cards.filter((card)=> card.id === draggableId)[0]

    if(sourceDroppableId === destDroppableId){
      console.log("Si estamos en la misma lista")
      
      //Utilizamos splice para cambiar los índices 
      sourceList.cards.splice(sourceIndex, 1)
      destinationList.cards.splice(destinationIndex, 0, draggingCard)
      //Actualizamos setData con los nuevos índices
      setData({
        ...data, 
        lists: {
          ...data.lists,
          [sourceList.id] : destinationList,
        }
      })
    }else{
      console.log("Si estamos en listas distintas")
      
      //Eliminar la card de la lista de origen
      sourceList.cards.splice(sourceIndex, 1);
      //Agregamos la card en la nueva lista
      destinationList.cards.splice(destinationIndex, 0, draggingCard)
      //Actualizar Data
      setData({
        ...data, 
        [sourceList.id] : sourceList,
        [destinationList.id] : destinationList,

      })

    }
    
  }
  
  return (
    <ContextAPI.Provider value={{updateListTitle, addCard, addList}}> 
    {/* Con esta línea exportamos a través de ContextAPI la función updateLIstTitle para usarla en cualquier componente */}
    
    <div className="board">
      <nav><p className='nav-board'>My Board</p></nav>
      <DragDropContext onDragEnd={onDragEnd}> {/*Indica el espacio donde se permite realizar drag & drop */}
      <Droppable droppableId='droppableBoard' type='list' direction='horizontal'>
        {
          (provided) => ( //Dentro de la función colocamos toda nuestra app
            <div className='lists-container'ref={provided.innerRef}
            {...provided.droppableProps} /*Con esto aceptamos todos los props que vienen de provided */ >
            { data.listIds.map((listId, index) => {
                const list = data.lists[listId]
                return <TrelloList list={list} key={listId} index={index}/>
                //Pasamos toda la información de la lista a través de const=list
              })
            }
            
        <AddCardorList type='List'/>
        {provided.placeholder}
        </div>
          ) 
        }
          
      </Droppable>
      </DragDropContext>
    </div>
    
    </ContextAPI.Provider>
  );
}

export default Board;