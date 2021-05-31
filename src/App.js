import "./App.css";
import ListCards from "./components/list-cards";
import { useState } from "react";

function App() {
  const [listCards, setListCards] = useState([
    { id: 0, userInput: "hello", likes: 0, category: "went-well" },
  ]);

  const addListCard = (e) => {
    setListCards([
      ...listCards,
      {
        id: 0,
        userInput: "",
        likes: 0,
        dilikes: 0,
        category: e.target.attributes.category.value,
      },
    ]);
  };

  function deleteItem(index) {
    setListCards(
      listCards.filter((currItem, currIndex) => currIndex !== index)
    );
  }

  function moveLeft(index){
    if(listCards[index].category === 'went-well' ){
      listCards[index].category = 'action-items';

    setListCards([
      ...listCards,
      
      
    ]);

   

    } else if (listCards[index].category === 'to-improve'){
      listCards[index].category = 'went-well';
      setListCards([...listCards])
    } else if (listCards[index].category === 'action-items'){
      listCards[index].category = 'to-improve';
      setListCards([...listCards])
    }
  }

  function moveRight(index){
    console.log(index);
    console.log(listCards[index].category)
    if(listCards[index].category === 'went-well' ){
      listCards[index].category = 'to-improve';

    setListCards([
      ...listCards,
      
      
    ]);

    } else if (listCards[index].category === 'to-improve'){
      listCards[index].category = 'action-items';
      setListCards([...listCards])
    } else if (listCards[index].category === 'action-items'){
      listCards[index].category = 'went-well';
      setListCards([...listCards])
    }
  }

  function incrementLikes(index){
    listCards[index].likes += 1
    setListCards([
      ...listCards,
    ])
    
    
    
  }


  return (
    <main class="content row">
      <h1>Retro Board</h1>
      <div>
        Layout &nbsp;<button class="button button-default">Column</button>
      </div>

      <div class="RetroApp row">
        <div class="RetroCategory RetroCategory-1">
          <h2>Went Well</h2>

          <button
            onClick={addListCard}
            category={"went-well"}
            type="button"
            class="ButtonAdd button button-default"
            aria-label="Add new card"
            title="Add new card"
          >
            +
          </button>
          {listCards.map((listCard, index) => {
            if (listCard.category === "went-well") {
              return (
                <ListCards
                  userInput={listCard.userInput}
                  likes={listCard.likes}
                  dislikes={listCard.dislikes}
                  index={index}
                  addListCard={addListCard}
                  deleteItem={deleteItem}
                  incrementLikes = {incrementLikes}
                  moveLeft = {moveLeft}
                  moveRight = {moveRight}
                />
              );
            }
          })}
        </div>

        <div class="RetroCategory RetroCategory-2">
          <h2>To Improve</h2>
          <button
            onClick={addListCard}
            category={"to-improve"}
            type="button"
            class="ButtonAdd button button-default"
            aria-label="Add to new card"
            title="Add to new card"
          >
            +
          </button>
          {listCards.map((listCard, index) => {
            if (listCard.category === "to-improve") {
              return (
                <ListCards
                  userInput={listCard.userInput}
                  likes={listCard.likes}
                  index={index}
                  dislikes={listCard.dislikes}
                  incrementLikes = {incrementLikes}
                  addListCard={addListCard}
                  deleteItem={deleteItem}
                  moveLeft = {moveLeft}
                  moveRight = {moveRight}
                />
              );
            }
          })}
        </div>

        <div class="RetroCategory RetroCategory-3">
          <h2>Action Items</h2>
          <button
            onClick={addListCard}
            category={"action-items"}
            type="button"
            class="ButtonAdd button button-default"
            aria-label="Add to new card"
            title="Add to new card"
          >
            +
          </button>
          {listCards.map((listCard, index) => {
            if (listCard.category === "action-items") {
              return (
                <ListCards
                  userInput={listCard.userInput}
                  likes={listCard.likes}
                  dislikes={listCard.dislikes}
                  index={index}
                  incrementLikes = {incrementLikes}
                  addListCard={addListCard}
                  deleteItem={deleteItem}
                  moveLeft = {moveLeft}
                  moveRight = {moveRight}
                />
              );
            }
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
